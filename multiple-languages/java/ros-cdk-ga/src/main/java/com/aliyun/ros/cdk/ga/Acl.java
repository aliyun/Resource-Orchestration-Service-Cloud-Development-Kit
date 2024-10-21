package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::Acl</code>, which is used to create an access control list (ACL).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:30.522Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.Acl")
public class Acl extends com.aliyun.ros.cdk.core.Resource {

    protected Acl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Acl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Acl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AclProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Acl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AclProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclEntries() {
        return software.amazon.jsii.Kernel.get(this, "attrAclEntries", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AclId: The  ID of the ACL.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AclName: The name of the ACL.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclName() {
        return software.amazon.jsii.Kernel.get(this, "attrAclName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AddressIPVersion: The IP version of the ACL.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: The tags of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AclProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.AclProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AclProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.Acl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.Acl> {
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
        private final com.aliyun.ros.cdk.ga.AclProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.AclProps.Builder();
        }

        /**
         * Property addressIpVersion: The IP version of the ACL.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: The IP version of the ACL. This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * Property addressIpVersion: The IP version of the ACL.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: The IP version of the ACL. This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL.
         * <p>
         * You can add up to 20 entries.
         * <p>
         * @return {@code this}
         * @param aclEntries Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. This parameter is required.
         */
        public Builder aclEntries(final com.aliyun.ros.cdk.core.IResolvable aclEntries) {
            this.props.aclEntries(aclEntries);
            return this;
        }
        /**
         * Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL.
         * <p>
         * You can add up to 20 entries.
         * <p>
         * @return {@code this}
         * @param aclEntries Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. This parameter is required.
         */
        public Builder aclEntries(final java.util.List<? extends java.lang.Object> aclEntries) {
            this.props.aclEntries(aclEntries);
            return this;
        }

        /**
         * Property aclName: The name of the ACL.
         * <p>
         * @return {@code this}
         * @param aclName Property aclName: The name of the ACL. This parameter is required.
         */
        public Builder aclName(final java.lang.String aclName) {
            this.props.aclName(aclName);
            return this;
        }
        /**
         * Property aclName: The name of the ACL.
         * <p>
         * @return {@code this}
         * @param aclName Property aclName: The name of the ACL. This parameter is required.
         */
        public Builder aclName(final com.aliyun.ros.cdk.core.IResolvable aclName) {
            this.props.aclName(aclName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of the ACL.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of the ACL. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ga.RosAcl.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.Acl}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.Acl build() {
            return new com.aliyun.ros.cdk.ga.Acl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
