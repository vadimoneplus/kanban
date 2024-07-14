import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseBoard, ResponseTask } from '../../models'

export const kanbanApi = createApi({
  reducerPath:'api',
  baseQuery:fetchBaseQuery({
    baseUrl:'http://localhost:3004'
  }),
  endpoints:build=>({
    getBoards: build.query<ResponseBoard[],number>({
      query:(boardNumber:number)=>({
        url:`/boards`,
        params:{
          id: boardNumber
        }
      })
    }),
    getTasks: build.query<ResponseTask[], number>({
      query: (tasksNumber: number) => ({
        url: `/tasks`,
        params: {
          boardId: tasksNumber
        }
      })
    }),
  })
})

export const {useGetBoardsQuery } = kanbanApi
export const {useGetTasksQuery } = kanbanApi