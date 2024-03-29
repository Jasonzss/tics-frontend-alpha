import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import LayoutIndex from '@/views/Layout/LayoutIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import Category from '@/views/Category/CategoryIndex.vue'
import UserSpaceIndexVue from '@/views/User/UserSpaceIndex.vue'
import DictionaryIndexVue from '@/views/Dictionary/DictionaryIndex.vue'
import CommunitiesIndex from '@/views/Communities/CommunitiesIndex.vue'
import CommunityIndex from '@/views/Community/CommunityIndex.vue'
import CreatorIndex from '@/views/Creator/CreatorIndex.vue'
import DevelopingIndex from '@/views/Developing/DevelopingIndex.vue'
import UserSpaceHome from '@/views/User/components/UserSpaceHome.vue'
import UserSpaceCreation from '@/views/User/components/UserSpaceCreation.vue'
import UserSpaceFavlist from '@/views/User/components/UserSpaceFavlist.vue'
import UserSpaceComment from '@/views/User/components/UserSpaceComment.vue'
import LearningHubIndex from '@/views/LearningHub/LearningHubIndex.vue'
import VideoIndex from '@/views/Video/VideoIndex.vue'
import AudioIndex from '@/views/Audio/AudioIndex.vue'
import EssayIndex from '@/views/Essay/EssayIndex.vue'
import ExerciseIndex from '@/views/Exercise/ExerciseIndex.vue'
import StoreIndexVue from '@/views/Store/StoreIndex.vue'
import MessageIndexVue from '@/views/Message/MessageIndex.vue'
import LearningLayoutVue from '@/views/LearningLayout/LearningLayoutIndex.vue'
import SearchIndexVue from '@/views/Search/SearchIndex.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      component: LayoutIndex,
      children: [
        {
          path: '',
          component: LearningLayoutVue,
          children: [
            {
              path: '',
              component: Home
            },
            {
              path:'category',
              component: Category
            },
            {
              path: 'userspace/:uid',
              component: UserSpaceIndexVue,
              props: true,
              children: [
                {
                  path: '',
                  component: UserSpaceHome
                },
                {
                  path: 'creation',
                  component: UserSpaceCreation
                },
                {
                  path: 'favlist',
                  component: UserSpaceFavlist
                },
                {
                  path: 'comment',
                  component: UserSpaceComment
                },
              ]
            },
            {
              path: 'user/:uid/communities',
              component: CommunitiesIndex
            },
            {
              path: 'user/:uid/creator',
              component: CreatorIndex
            },
            {
              path: 'dictionary/:word',
              component: DictionaryIndexVue
            },
            {
              path: 'developing',
              component: DevelopingIndex
            },
            {
              path: 'community',
              component: CommunityIndex
            },
            {
              path: 'video/:id',
              component: VideoIndex
            },
            {
              path: 'audio/:id',
              component: AudioIndex
            },
            {
              path: 'essay/:id',
              component: EssayIndex
            },
            {
              path: 'learninghub',
              component: LearningHubIndex
            },
            {
              path: 'exercise/word',
              component: ExerciseIndex
            },
            {
              path: 'store',
              component: StoreIndexVue
            },
            {
              path: 'message',
              component: MessageIndexVue
            },
            {
              path: 'search',
              component: SearchIndexVue
            },
          ]
        }
      ]
    },
    {
      path: '/login',
      component: LoginIndex
    },
  ]
})

export default router
