package com.aliyun.ros.cdk.ots;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OTS::InstanceV2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.641Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.InstanceV2")
public class InstanceV2 extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ots.IInstanceV2 {

    protected InstanceV2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceV2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InstanceV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.InstanceV2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InstanceV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.InstanceV2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceName: Name of the tablestore instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.InstanceV2Props getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.InstanceV2Props.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.InstanceV2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.InstanceV2> {
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
        private final com.aliyun.ros.cdk.ots.InstanceV2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.InstanceV2Props.Builder();
        }

        /**
         * Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceDescription: Example description.
         * <p>
         * The length is limited to between 3-256 characters.
         * <p>
         * @return {@code this}
         * @param instanceDescription Property instanceDescription: Example description. This parameter is required.
         */
        public Builder instanceDescription(final java.lang.String instanceDescription) {
            this.props.instanceDescription(instanceDescription);
            return this;
        }
        /**
         * Property instanceDescription: Example description.
         * <p>
         * The length is limited to between 3-256 characters.
         * <p>
         * @return {@code this}
         * @param instanceDescription Property instanceDescription: Example description. This parameter is required.
         */
        public Builder instanceDescription(final com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
            this.props.instanceDescription(instanceDescription);
            return this;
        }

        /**
         * Property networkSourceAcl: The allowed-network source list.
         * <p>
         * All networks are allowed by default.
         * <p>
         * @return {@code this}
         * @param networkSourceAcl Property networkSourceAcl: The allowed-network source list. This parameter is required.
         */
        public Builder networkSourceAcl(final com.aliyun.ros.cdk.core.IResolvable networkSourceAcl) {
            this.props.networkSourceAcl(networkSourceAcl);
            return this;
        }
        /**
         * Property networkSourceAcl: The allowed-network source list.
         * <p>
         * All networks are allowed by default.
         * <p>
         * @return {@code this}
         * @param networkSourceAcl Property networkSourceAcl: The allowed-network source list. This parameter is required.
         */
        public Builder networkSourceAcl(final java.util.List<? extends java.lang.Object> networkSourceAcl) {
            this.props.networkSourceAcl(networkSourceAcl);
            return this;
        }

        /**
         * Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
         * <p>
         * @return {@code this}
         * @param networkTypeAcl Property networkTypeAcl: The instance allows the network type list, which is allowed by default. This parameter is required.
         */
        public Builder networkTypeAcl(final com.aliyun.ros.cdk.core.IResolvable networkTypeAcl) {
            this.props.networkTypeAcl(networkTypeAcl);
            return this;
        }
        /**
         * Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
         * <p>
         * @return {@code this}
         * @param networkTypeAcl Property networkTypeAcl: The instance allows the network type list, which is allowed by default. This parameter is required.
         */
        public Builder networkTypeAcl(final java.util.List<? extends java.lang.Object> networkTypeAcl) {
            this.props.networkTypeAcl(networkTypeAcl);
            return this;
        }

        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: The list of instance tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of instance tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ots.InstanceV2}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.InstanceV2 build() {
            return new com.aliyun.ros.cdk.ots.InstanceV2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
