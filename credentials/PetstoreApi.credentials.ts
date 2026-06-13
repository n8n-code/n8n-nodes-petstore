import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class PetstoreApi implements ICredentialType {
        name = 'N8nDevPetstoreApi';

        displayName = 'Petstore API';

        icon: Icon = { light: 'file:../nodes/Petstore/petstore.png', dark: 'file:../nodes/Petstore/petstore.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '/api/v3',
                        required: true,
                        placeholder: '/api/v3',
                        description: 'The base URL of your Petstore API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
