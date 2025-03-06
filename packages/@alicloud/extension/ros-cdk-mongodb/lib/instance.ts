import * as ram from "@alicloud/ros-cdk-ram";
import { Instance } from "@alicloud/ros-cdk-mongodb";
import * as perms from "./perms.cdk"
import {IResolvable} from "@alicloud/ros-cdk-core";


class ExtensionInstance extends Instance {
    private grant(
        principle: ram.IPrincipal,
        actions: string[],
        resourceArn: string | IResolvable, ...otherResourceArns: (string | IResolvable)[]): ram.ManagedPolicy {
        const policyDocument: ram.RosManagedPolicy.PolicyDocumentProperty = {
            statement: [
                {
                    action: actions,
                    effect: 'Allow',
                    resource: [resourceArn, ...otherResourceArns],
                },
            ],
            version: '1',
        };
        return principle.addToPolicy(policyDocument);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list resources for this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantList(identity: ram.IPrincipal) {
        return this.grant(identity, perms.MONGODB_INSTANCE_LIST_ACTIONS,
            this.attrArn);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list and get resources for this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantRead(identity: ram.IPrincipal) {
        return this.grant(identity, perms.MONGODB_INSTANCE_LIST_ACTIONS.concat(perms.MONGODB_INSTANCE_GET_ACTIONS),
            this.attrArn);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to create, update and delete resources for this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantReadWrite(identity: ram.IPrincipal) {
        return this.grant(identity, perms.MONGODB_INSTANCE_LIST_ACTIONS.concat(
            perms.MONGODB_INSTANCE_GET_ACTIONS,
            perms.MONGODB_INSTANCE_CREATE_ACTIONS,
            perms.MONGODB_INSTANCE_UPDATE_ACTIONS,
            perms.MONGODB_INSTANCE_DELETE_ACTIONS,
            ),
            this.attrArn);
    }

    /**
     * Grant an RAM principal (Role/Group/User) full control over this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantFullAccess(identity: ram.IPrincipal) {
        return this.grant(identity, ['dds:*'],
            this.attrArn);
    }

}