import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://194.238.30.103/api/'}),
    endpoints: (builder) => ({
        getBrands: builder.query({
            query: () => 'brands'
        }),
        getModels: builder.query({
            query: (id) => `model?brandId=${id}`
        }),
        getUser: builder.query({
            query: (id) => `users/user/${id}`
        }),
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: 'auth/logout',
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'users/register-personal',
                method: 'POST',
                headers :{
                     "Content-Type": "application/json"
                },
                body: data
            })
        }),
        sendOtpMail: builder.mutation({
            query: (data) => ({
                url: 'auth/send-otp-mail',
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: data
            })
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: 'auth/verify-otp',
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: data
            })
        }),
        resetPasswordEmail: builder.mutation({
            query: (data) => ({
                url: 'auth/reset-password-email',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: 'users/update-user',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
        }),
        uploadAccidentPic: builder.mutation({
            query: (data) => ({
                url: 'file/upload-accident-pic',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWxha2JhckFsYWtiYXJvdl9hZjQ4YzVlZi1iMDQ2LTQ1MjMtYjBjYS1kMzBiNjk5Y2JiNzgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjA0NTBkMjc1LWEyOTQtNDczOC1hOWEwLTQ3MGJhMTQ3OTFiOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYWs2YXJAZ21haWwuY29tIiwiZXhwIjoxNzMzMTYxODk4LCJpc3MiOiJ3d3cuVGVjaC5pbyIsImF1ZCI6Ind3dy5UZWNoLmlvIn0.mk5swBlnSYJevHl21sygG9ivoXWyQDhAS5nBy9giMbw'
                },
                body: data
            })
        })
    })
})

export const {useGetBrandsQuery, useGetModelsQuery, useUpdateUserMutation, useGetUserQuery, useLogoutMutation, useRegisterMutation, useSendOtpMailMutation, useVerifyOtpMutation, useResetPasswordEmailMutation, useLoginMutation, useUploadAccidentPicMutation} = mainApi;