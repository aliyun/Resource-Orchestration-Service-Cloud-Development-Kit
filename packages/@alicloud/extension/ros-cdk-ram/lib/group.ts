import { ManagedPolicy, Group, RosManagedPolicy } from "@alicloud/ros-cdk-ram";
import { IPrincipal } from './principals.cdk'
import * as ros from "@alicloud/ros-cdk-core";

class ExtensionGroup extends Group implements IPrincipal {
    public readonly grantPrincipal: IPrincipal = this;
    public readonly principalName: string | ros.IResolvable = this.attrGroupName;
    public readonly principalType: string = 'group';

    public addToPolicy(policyDocument: RosManagedPolicy.PolicyDocumentProperty): ManagedPolicy {
        const suffix = ros.generateRandomString(5);
        return new ManagedPolicy(this, `Policy${suffix}`, {
            policyName: `Policy${suffix}`,
            policyDocument: policyDocument,
            groups: [this.ref],
        });
    }
}
