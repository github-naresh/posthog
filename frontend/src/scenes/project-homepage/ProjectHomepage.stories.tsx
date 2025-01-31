import { useEffect } from 'react'
import { Meta } from '@storybook/react'
import { mswDecorator } from '~/mocks/browser'
import { App } from 'scenes/App'
import { router } from 'kea-router'
import { urls } from 'scenes/urls'

export default {
    title: 'Scenes-App/Project Homepage',
    decorators: [
        mswDecorator({
            get: {
                '/api/projects/:team_id/dashboards/': require('../dashboard/__mocks__/dashboards.json'),
                '/api/projects/:team_id/dashboards/1/': require('../dashboard/__mocks__/dashboard1.json'),
                '/api/projects/:team_id/dashboards/1/collaborators/': [],
            },
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        options: { showPanel: false },
        testOptions: {
            excludeNavigationFromSnapshot: true,
        },
        viewMode: 'story',
    },
} as Meta

export const ProjectHomepage = (): JSX.Element => {
    useEffect(() => {
        router.actions.push(urls.projectHomepage())
    }, [])
    return <App />
}
