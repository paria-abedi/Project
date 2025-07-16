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
  return {
    allComments: apiComments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    addComment,
    isAddingComment: addCommentMutation.isPending,
  };
}
