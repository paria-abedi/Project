/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clientApiManager } from "@/libs/utils/client.axios.config";
import type { AxiosResponse } from "axios";
import { useCallback } from "react";
type Comment = {
  name: string;
  country: string;
  comment: string;
  avatar: string;
  userId: string;
  id:string
};
const fetchComments = async ({ pageParam = 1 }) => {
  const limit = 10;
  const res = await clientApiManager.get(`?page=${pageParam}&limit=${limit}`);
  return {
    data: res.data,
    nextPage: res.data.length === limit ? pageParam + 1 : undefined,
  };
};

export function useComments() {
  const queryClient = useQueryClient();
const userId = "user-1234";
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["comments"],
    queryFn: ({ pageParam = 1 }) => fetchComments({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });
//  post service
 const addCommentMutation = useMutation({
  mutationFn: (newComment: Comment & { userId: string }): Promise<AxiosResponse<any>> =>
    clientApiManager.post("", newComment),
  onSuccess: (response, newComment) => {
    queryClient.setQueryData(['comments'], (oldData: any) => {
      if (!oldData) return oldData;
      const newData = {
        ...oldData,
        pages: oldData.pages.map((page: any, index: number) => {
          if (index === 0) {
            return {
              ...page,
              data: [newComment, ...page.data],
            };
          }
          return page;
        }),
      };
      return newData;
    });
  },
});
const apiComments = data?.pages.flatMap((page) => page.data) ?? [];

  const addComment = useCallback(
  (newComment: Comment) => {
    const newCommentWithUser = { ...newComment, userId };
    addCommentMutation.mutate(newCommentWithUser);
  },
  [addCommentMutation]
);
//  delete service
const deleteCommentMutation=useMutation({
  mutationFn:(id:string)=>clientApiManager.delete(`/${id}`),
  onSuccess:(_,id)=>{
    queryClient.setQueryData(['comments'], (oldData: any)=>{
      if(!oldData) return oldData;
      return{
        ...oldData,
        pages:oldData.pages.map((page:any)=>({
          ...page,
          data:page.data.filter((comment:Comment)=>comment.id !== id),
        }))
      }
    })
  }
});
const deleteComment=useCallback(
  (id:string)=>{
    deleteCommentMutation.mutate(id);
  },
  [deleteCommentMutation]
);
// edit service
const editCommentMutation =useMutation({
  
  mutationFn:({id,updatedComment}:{id:string; updatedComment: Partial<Comment>})=>
    clientApiManager.put(`/${id}`,updatedComment),
  onSuccess:(res,{id})=>{
    const updated=res.data;
    queryClient.setQueryData(['comments'],(oldData:any)=>{
      if(!oldData) return oldData;
      return{
        ...oldData,
        pages:oldData.pages.map((page:any)=>({
          ...page,
          data:page.data.map((comment:Comment)=>
          comment.id === id ? updated:comment)
        }))
      }
    })
    
  }
})
const editComment=useCallback(
   (id: string, updatedComment: Partial<Comment>) =>{
    editCommentMutation.mutate({id,updatedComment});
   },
   [editCommentMutation]
)

  return {
    allComments: apiComments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    addComment,
     deleteComment,
    editComment,
    isAddingComment: addCommentMutation.isPending,
     isDeletingComment: deleteCommentMutation.isPending,
    isEditingComment: editCommentMutation.isPending,
  };
}
