package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::PrefixList</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.730Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PrefixList")
public class PrefixList extends com.aliyun.ros.cdk.core.Resource {

    protected PrefixList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrefixList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::PrefixList</code>.
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
    public PrefixList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.PrefixListProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::PrefixList</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public PrefixList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.PrefixListProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>ALIYUN::VPC::PrefixList</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PrefixList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CreateTime: The time when the prefix list was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Entries: The CIDR address block list of the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEntries() {
        return software.amazon.jsii.Kernel.get(this, "attrEntries", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpVersion: The IP version of the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrIpVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxEntries() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxEntries", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrefixListDescription: The description of the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrefixListDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrPrefixListDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrefixListId: The ID of the query Prefix List.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrefixListId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrefixListId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrefixListName: The name of the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrefixListName() {
        return software.amazon.jsii.Kernel.get(this, "attrPrefixListName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ShareType: The share type of the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrShareType() {
        return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: The tags of PrefixList.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.PrefixList}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.PrefixList> {
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
        private com.aliyun.ros.cdk.vpc.PrefixListProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property entries: The CIDR address block list of the prefix list.
         * <p>
         * @return {@code this}
         * @param entries Property entries: The CIDR address block list of the prefix list. This parameter is required.
         */
        public Builder entries(final com.aliyun.ros.cdk.core.IResolvable entries) {
            this.props().entries(entries);
            return this;
        }
        /**
         * Property entries: The CIDR address block list of the prefix list.
         * <p>
         * @return {@code this}
         * @param entries Property entries: The CIDR address block list of the prefix list. This parameter is required.
         */
        public Builder entries(final java.util.List<? extends java.lang.Object> entries) {
            this.props().entries(entries);
            return this;
        }

        /**
         * Property ipVersion: The IP version of the prefix list.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>IPvv4</strong>:IPv4 version.</li>
         * <li><strong>IPv6</strong>:IPv6.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version of the prefix list. This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props().ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The IP version of the prefix list.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>IPvv4</strong>:IPv4 version.</li>
         * <li><strong>IPv6</strong>:IPv6.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version of the prefix list. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props().ipVersion(ipVersion);
            return this;
        }

        /**
         * Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
         * <p>
         * @return {@code this}
         * @param maxEntries Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list. This parameter is required.
         */
        public Builder maxEntries(final java.lang.Number maxEntries) {
            this.props().maxEntries(maxEntries);
            return this;
        }
        /**
         * Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
         * <p>
         * @return {@code this}
         * @param maxEntries Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list. This parameter is required.
         */
        public Builder maxEntries(final com.aliyun.ros.cdk.core.IResolvable maxEntries) {
            this.props().maxEntries(maxEntries);
            return this;
        }

        /**
         * Property prefixListDescription: The description of the prefix list.
         * <p>
         * It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
         * <p>
         * @return {@code this}
         * @param prefixListDescription Property prefixListDescription: The description of the prefix list. This parameter is required.
         */
        public Builder prefixListDescription(final java.lang.String prefixListDescription) {
            this.props().prefixListDescription(prefixListDescription);
            return this;
        }
        /**
         * Property prefixListDescription: The description of the prefix list.
         * <p>
         * It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
         * <p>
         * @return {@code this}
         * @param prefixListDescription Property prefixListDescription: The description of the prefix list. This parameter is required.
         */
        public Builder prefixListDescription(final com.aliyun.ros.cdk.core.IResolvable prefixListDescription) {
            this.props().prefixListDescription(prefixListDescription);
            return this;
        }

        /**
         * Property prefixListName: The name of the prefix list.
         * <p>
         * @return {@code this}
         * @param prefixListName Property prefixListName: The name of the prefix list. This parameter is required.
         */
        public Builder prefixListName(final java.lang.String prefixListName) {
            this.props().prefixListName(prefixListName);
            return this;
        }
        /**
         * Property prefixListName: The name of the prefix list.
         * <p>
         * @return {@code this}
         * @param prefixListName Property prefixListName: The name of the prefix list. This parameter is required.
         */
        public Builder prefixListName(final com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.props().prefixListName(prefixListName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of prefix list.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of prefix list. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.PrefixList}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.PrefixList build() {
            return new com.aliyun.ros.cdk.vpc.PrefixList(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.PrefixListProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.PrefixListProps.Builder();
            }
            return this.props;
        }
    }
}
