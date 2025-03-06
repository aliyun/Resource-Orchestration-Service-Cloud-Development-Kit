import { ManagedPolicy, User, RosManagedPolicy } from "@alicloud/ros-cdk-ram";
import { IPrincipal } from './principals.cdk'
import * as ros from "@alicloud/ros-cdk-core";

class ExtensionUser extends User implements IPrincipal {
    public readonly grantPrincipal: IPrincipal = this;
    public readonly principalName: string | ros.IResolvable = this.attrUserName;
    public readonly principalType: string = 'user';

    public addToPolicy(policyDocument: RosManagedPolicy.PolicyDocumentProperty): ManagedPolicy {
        const suffix = ros.generateRandomString(5);
        return new ManagedPolicy(this, `Policy${suffix}`, {
            policyName: `Policy${suffix}`,
            policyDocument: policyDocument,
            users: [this.ref],
        });
    }
}
