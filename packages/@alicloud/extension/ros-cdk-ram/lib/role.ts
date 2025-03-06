import { ManagedPolicy, Role, RosManagedPolicy } from "@alicloud/ros-cdk-ram";
import { IPrincipal } from './principals.cdk'
import * as ros from "@alicloud/ros-cdk-core";

class ExtensionRole extends Role implements IPrincipal {
    public readonly grantPrincipal: IPrincipal = this;
    public readonly principalName: string | ros.IResolvable = this.attrRoleName;
    public readonly principalType: string = 'role';

    public addToPolicy(policyDocument: RosManagedPolicy.PolicyDocumentProperty): ManagedPolicy {
        const suffix = ros.generateRandomString(5);
        return new ManagedPolicy(this, `Policy${suffix}`, {
            policyName: `Policy${suffix}`,
            policyDocument: policyDocument,
            roles: [this.ref],
        });
    }
}
