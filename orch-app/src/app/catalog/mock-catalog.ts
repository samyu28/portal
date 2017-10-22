import { Item } from './item';

export const ITEMS: Item[] = [
    {
        "id": 1,
        "name": "Day-0 New L3 VPN",
        "icon": "/assets/img/l3vpn.png",
        "desc": "Provision a new L3VPN Service",
        "state": "Active",
        "version": 1,
        "createdBy": "admin",
        "createdOn": "2017-09-27T13:25:54.697Z",
        "fields": [
            {
                "name": "service-name",
                "label": "Service Name",
                "type": "text",
                "value": "Service Name ",
                "required": true,
                "minlen": 5,
                "maxlen": 30
            },
            {
                "name": "service-reconciliation",
                "label": "Is Service Reconciliation",
                "type": "checkbox",
                "value": "false"
            },
            {
                "name": "xconnect-name",
                "label": "Xconnect Group Name",
                "type": "list",
                "required": true,
                "value": "SWE-P2P",
                "listval": [ 'SWE-P2P', 'ILL-P2P', 'ELL-NGN-P2P' ]
            },
            {
                "name": "sid1",
                "label": "Attachment Circuit 1",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            },
            {
                "name": "sid2",
                "label": "Attachment Circuit 2",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            },
            {
                "name": "text-area",
                "label": "Attachment Text Area:",
                "type": "textArea"
                
                
            }
        ]
    },
    {
        "id": 2,
        "name": "Day-0 New L2 VPN",
        "icon": "/assets/img/l2vpn.png",
        "desc": "Provision a new L3VPN Service",
        "state": "Active",
        "version": 1,
        "createdBy": "admin",
        "createdOn": "2017-09-27T13:25:54.697Z",
        "fields": [
            {
                "name": "service-name",
                "label": "Service Name",
                "type": "text",
                "required": true,
                "minlen": 5,
                "maxlen": 30
            },
            {
                "name": "service-reconciliation",
                "label": "Is Service Reconciliation",
                "type": "checkbox",
                "defval": "false"
            },
            {
                "name": "xconnect-name",
                "label": "Xconnect Group Name",
                "type": "list",
                "required": true,
                "defval": "SWE-P2P",
                "listval": [ 'SWE-P2P', 'ILL-P2P', 'ELL-NGN-P2P' ]
            },
            {
                "name": "sid1",
                "label": "Attachment Circuit 1",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            },
            {
                "name": "sid2",
                "label": "Attachment Circuit 2",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            }
        ]
    },
    {
        "id": 3,
        "name": "Day-2 Modify L3 VPN",
        "icon": "/assets/img/l3vpn.png",
        "desc": "Provision a new L3VPN Service",
        "state": "Active",
        "version": 1,
        "createdBy": "admin",
        "createdOn": "2017-09-27T13:25:54.697Z",
        "fields": [
            {
                "name": "service-name",
                "label": "Service Name",
                "type": "text",
                "required": true,
                "minlen": 5,
                "maxlen": 30
            },
            {
                "name": "service-reconciliation",
                "label": "Is Service Reconciliation",
                "type": "checkbox",
                "defval": "false"
            },
            {
                "name": "xconnect-name",
                "label": "Xconnect Group Name",
                "type": "list",
                "required": true,
                "defval": "SWE-P2P",
                "listval": [ 'SWE-P2P', 'ILL-P2P', 'ELL-NGN-P2P' ]
            },
            {
                "name": "sid1",
                "label": "Attachment Circuit 1",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            },
            {
                "name": "sid2",
                "label": "Attachment Circuit 2",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            }
        ]
    },
    {
        "id": 4,
        "name": "Day-2 Modify L2 VPN",
        "icon": "/assets/img/l2vpn.png",
        "desc": "Provision a new L3VPN Service",
        "state": "Active",
        "version": 1,
        "createdBy": "admin",
        "createdOn": "2017-09-27T13:25:54.697Z",
        "fields": [
            {
                "name": "service-name",
                "label": "Service Name",
                "type": "text",
                "required": true,
                "minlen": 5,
                "maxlen": 30
            },
            {
                "name": "service-reconciliation",
                "label": "Is Service Reconciliation",
                "type": "checkbox",
                "defval": "false"
            },
            {
                "name": "xconnect-name",
                "label": "Xconnect Group Name",
                "type": "list",
                "required": true,
                "defval": "SWE-P2P",
                "listval": [ 'SWE-P2P', 'ILL-P2P', 'ELL-NGN-P2P' ]
            },
            {
                "name": "sid1",
                "label": "Attachment Circuit 1",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            },
            {
                "name": "sid2",
                "label": "Attachment Circuit 2",
                "type": "text",
                "required": true,
                "pattern": "[A-Za-z0-9]{1,32}"
            }
        ]
    }
];
