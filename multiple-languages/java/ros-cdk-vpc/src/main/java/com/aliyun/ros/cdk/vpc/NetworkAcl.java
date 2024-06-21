package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::NetworkAcl</code>, which is used to create a network access control list (ACL).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.661Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NetworkAcl")
public class NetworkAcl extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkAcl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkAcl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public NetworkAcl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NetworkAclProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public NetworkAcl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NetworkAclProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NetworkAclEntryName: The name of the inbound rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkAclEntryName() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAclEntryName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkAclId: The ID of the network ACL.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAclId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NetworkAclProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.NetworkAclProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NetworkAclProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.NetworkAcl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.NetworkAcl> {
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
        private final com.aliyun.ros.cdk.vpc.NetworkAclProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.NetworkAclProps.Builder();
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property description: The description of the network ACL.
         * <p>
         * The description must be 2 to 256 characters in length. The description must start
         * with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the network ACL. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the network ACL.
         * <p>
         * The description must be 2 to 256 characters in length. The description must start
         * with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the network ACL. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property egressAclEntries: The list of egress network ACL entries.
         * <p>
         * @return {@code this}
         * @param egressAclEntries Property egressAclEntries: The list of egress network ACL entries. This parameter is required.
         */
        public Builder egressAclEntries(final com.aliyun.ros.cdk.core.IResolvable egressAclEntries) {
            this.props.egressAclEntries(egressAclEntries);
            return this;
        }
        /**
         * Property egressAclEntries: The list of egress network ACL entries.
         * <p>
         * @return {@code this}
         * @param egressAclEntries Property egressAclEntries: The list of egress network ACL entries. This parameter is required.
         */
        public Builder egressAclEntries(final java.util.List<? extends java.lang.Object> egressAclEntries) {
            this.props.egressAclEntries(egressAclEntries);
            return this;
        }

        /**
         * Property ingressAclEntries: The list of ingress network ACL entries.
         * <p>
         * @return {@code this}
         * @param ingressAclEntries Property ingressAclEntries: The list of ingress network ACL entries. This parameter is required.
         */
        public Builder ingressAclEntries(final com.aliyun.ros.cdk.core.IResolvable ingressAclEntries) {
            this.props.ingressAclEntries(ingressAclEntries);
            return this;
        }
        /**
         * Property ingressAclEntries: The list of ingress network ACL entries.
         * <p>
         * @return {@code this}
         * @param ingressAclEntries Property ingressAclEntries: The list of ingress network ACL entries. This parameter is required.
         */
        public Builder ingressAclEntries(final java.util.List<? extends java.lang.Object> ingressAclEntries) {
            this.props.ingressAclEntries(ingressAclEntries);
            return this;
        }

        /**
         * Property networkAclName: The name of the network ACL.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
         * start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param networkAclName Property networkAclName: The name of the network ACL. This parameter is required.
         */
        public Builder networkAclName(final java.lang.String networkAclName) {
            this.props.networkAclName(networkAclName);
            return this;
        }
        /**
         * Property networkAclName: The name of the network ACL.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
         * start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param networkAclName Property networkAclName: The name of the network ACL. This parameter is required.
         */
        public Builder networkAclName(final com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.props.networkAclName(networkAclName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.NetworkAcl}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.NetworkAcl build() {
            return new com.aliyun.ros.cdk.vpc.NetworkAcl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
