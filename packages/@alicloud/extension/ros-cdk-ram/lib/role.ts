import { ManagedPolicy, Role, RosManagedPolicy, RoleProps } from "@alicloud/ros-cdk-ram";
import { IPrincipal } from './principals.cdk'
import * as ros from "@alicloud/ros-cdk-core";

class ExtensionRole extends Role implements IPrincipal {
    public readonly grantPrincipal: IPrincipal = this;
    public readonly principalName: string | ros.IResolvable;
    public readonly principalType: string = 'role';

    constructor(scope: ros.Construct, id: string, props: RoleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id, props, enableResourcePropertyConstraint);
        this.principalName = this.attrRoleName;
    }

    public addToPolicy(policyDocument: RosManagedPolicy.PolicyDocumentProperty): ManagedPolicy {
        const suffix = ros.generateRandomString(5);
        return new ManagedPolicy(this, `Policy${suffix}`, {
            policyName: `Policy${suffix}`,
            policyDocument: policyDocument,
            roles: [this.ref],
        });
    }
}
