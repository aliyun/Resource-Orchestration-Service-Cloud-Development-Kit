package com.aliyun.ros.cdk.vpc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::VPC::NetworkAcls</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:48.381Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.NetworkAcls")
public class NetworkAcls extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkAcls(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkAcls(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::VPC::NetworkAcls</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public NetworkAcls(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.NetworkAclsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::NetworkAcls</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public NetworkAcls(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.NetworkAclsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::NetworkAcls</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public NetworkAcls(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute NetworkAclIds: The list of The network acl ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkAclIds() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAclIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkAcls: The list of The network acls.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkAcls() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAcls", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.NetworkAcls}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.NetworkAcls> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.vpc.datasource.NetworkAclsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property networkAclId: The ID of the network ACL.
         * <p>
         * @return {@code this}
         * @param networkAclId Property networkAclId: The ID of the network ACL. This parameter is required.
         */
        public Builder networkAclId(final java.lang.String networkAclId) {
            this.props().networkAclId(networkAclId);
            return this;
        }
        /**
         * Property networkAclId: The ID of the network ACL.
         * <p>
         * @return {@code this}
         * @param networkAclId Property networkAclId: The ID of the network ACL. This parameter is required.
         */
        public Builder networkAclId(final com.aliyun.ros.cdk.core.IResolvable networkAclId) {
            this.props().networkAclId(networkAclId);
            return this;
        }

        /**
         * Property networkAclName: The name of the network ACL.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param networkAclName Property networkAclName: The name of the network ACL. This parameter is required.
         */
        public Builder networkAclName(final java.lang.String networkAclName) {
            this.props().networkAclName(networkAclName);
            return this;
        }
        /**
         * Property networkAclName: The name of the network ACL.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param networkAclName Property networkAclName: The name of the network ACL. This parameter is required.
         */
        public Builder networkAclName(final com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.props().networkAclName(networkAclName);
            return this;
        }

        /**
         * Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set. This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props().resourceId(resourceId);
            return this;
        }
        /**
         * Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set. This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props().resourceId(resourceId);
            return this;
        }

        /**
         * Property resourceType: The type of the associated instance.
         * <p>
         * Set the value to VSwitch.
         * This parameter is valid only if ResourceType and ResourceId are both set.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the associated instance. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props().resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The type of the associated instance.
         * <p>
         * Set the value to VSwitch.
         * This parameter is valid only if ResourceType and ResourceId are both set.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the associated instance. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props().resourceType(resourceType);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.NetworkAcls}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.NetworkAcls build() {
            return new com.aliyun.ros.cdk.vpc.datasource.NetworkAcls(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.NetworkAclsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.NetworkAclsProps.Builder();
            }
            return this.props;
        }
    }
}
