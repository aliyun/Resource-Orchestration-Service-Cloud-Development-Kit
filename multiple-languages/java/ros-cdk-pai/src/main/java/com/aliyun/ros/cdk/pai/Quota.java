package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Quota</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.813Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Quota")
public class Quota extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IQuota {

    protected Quota(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Quota(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Quota(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.QuotaProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Quota(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.QuotaProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute QuotaId: The ID of the quota.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuotaId() {
        return software.amazon.jsii.Kernel.get(this, "attrQuotaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.QuotaProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.QuotaProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Quota}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Quota> {
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
        private final com.aliyun.ros.cdk.pai.QuotaProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.QuotaProps.Builder();
        }

        /**
         * Property quotaName: The name of the quota.
         * <p>
         * @return {@code this}
         * @param quotaName Property quotaName: The name of the quota. This parameter is required.
         */
        public Builder quotaName(final java.lang.String quotaName) {
            this.props.quotaName(quotaName);
            return this;
        }
        /**
         * Property quotaName: The name of the quota.
         * <p>
         * @return {@code this}
         * @param quotaName Property quotaName: The name of the quota. This parameter is required.
         */
        public Builder quotaName(final com.aliyun.ros.cdk.core.IResolvable quotaName) {
            this.props.quotaName(quotaName);
            return this;
        }

        /**
         * Property allocateStrategy: The allocation strategy.
         * <p>
         * @return {@code this}
         * @param allocateStrategy Property allocateStrategy: The allocation strategy. This parameter is required.
         */
        public Builder allocateStrategy(final java.lang.String allocateStrategy) {
            this.props.allocateStrategy(allocateStrategy);
            return this;
        }
        /**
         * Property allocateStrategy: The allocation strategy.
         * <p>
         * @return {@code this}
         * @param allocateStrategy Property allocateStrategy: The allocation strategy. This parameter is required.
         */
        public Builder allocateStrategy(final com.aliyun.ros.cdk.core.IResolvable allocateStrategy) {
            this.props.allocateStrategy(allocateStrategy);
            return this;
        }

        /**
         * Property clusterSpec: The cluster specification.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The cluster specification. This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * Property clusterSpec: The cluster specification.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The cluster specification. This parameter is required.
         */
        public Builder clusterSpec(final java.util.Map<java.lang.String, ? extends java.lang.Object> clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }

        /**
         * Property description: The description of the quota.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the quota. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the quota.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the quota. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property labels: The labels associated with the quota.
         * <p>
         * @return {@code this}
         * @param labels Property labels: The labels associated with the quota. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels: The labels associated with the quota.
         * <p>
         * @return {@code this}
         * @param labels Property labels: The labels associated with the quota. This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * Property min: The minimum resource allocation configuration.
         * <p>
         * @return {@code this}
         * @param min Property min: The minimum resource allocation configuration. This parameter is required.
         */
        public Builder min(final com.aliyun.ros.cdk.core.IResolvable min) {
            this.props.min(min);
            return this;
        }
        /**
         * Property min: The minimum resource allocation configuration.
         * <p>
         * @return {@code this}
         * @param min Property min: The minimum resource allocation configuration. This parameter is required.
         */
        public Builder min(final com.aliyun.ros.cdk.pai.RosQuota.MinProperty min) {
            this.props.min(min);
            return this;
        }

        /**
         * Property parentQuotaId: The ID of the parent quota.
         * <p>
         * @return {@code this}
         * @param parentQuotaId Property parentQuotaId: The ID of the parent quota. This parameter is required.
         */
        public Builder parentQuotaId(final java.lang.String parentQuotaId) {
            this.props.parentQuotaId(parentQuotaId);
            return this;
        }
        /**
         * Property parentQuotaId: The ID of the parent quota.
         * <p>
         * @return {@code this}
         * @param parentQuotaId Property parentQuotaId: The ID of the parent quota. This parameter is required.
         */
        public Builder parentQuotaId(final com.aliyun.ros.cdk.core.IResolvable parentQuotaId) {
            this.props.parentQuotaId(parentQuotaId);
            return this;
        }

        /**
         * Property queueStrategy: The queue strategy.
         * <p>
         * @return {@code this}
         * @param queueStrategy Property queueStrategy: The queue strategy. This parameter is required.
         */
        public Builder queueStrategy(final java.lang.String queueStrategy) {
            this.props.queueStrategy(queueStrategy);
            return this;
        }
        /**
         * Property queueStrategy: The queue strategy.
         * <p>
         * @return {@code this}
         * @param queueStrategy Property queueStrategy: The queue strategy. This parameter is required.
         */
        public Builder queueStrategy(final com.aliyun.ros.cdk.core.IResolvable queueStrategy) {
            this.props.queueStrategy(queueStrategy);
            return this;
        }

        /**
         * Property quotaConfig: The quota configuration.
         * <p>
         * @return {@code this}
         * @param quotaConfig Property quotaConfig: The quota configuration. This parameter is required.
         */
        public Builder quotaConfig(final com.aliyun.ros.cdk.core.IResolvable quotaConfig) {
            this.props.quotaConfig(quotaConfig);
            return this;
        }
        /**
         * Property quotaConfig: The quota configuration.
         * <p>
         * @return {@code this}
         * @param quotaConfig Property quotaConfig: The quota configuration. This parameter is required.
         */
        public Builder quotaConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> quotaConfig) {
            this.props.quotaConfig(quotaConfig);
            return this;
        }

        /**
         * Property resourceGroupIds: The list of resource group IDs.
         * <p>
         * @return {@code this}
         * @param resourceGroupIds Property resourceGroupIds: The list of resource group IDs. This parameter is required.
         */
        public Builder resourceGroupIds(final com.aliyun.ros.cdk.core.IResolvable resourceGroupIds) {
            this.props.resourceGroupIds(resourceGroupIds);
            return this;
        }
        /**
         * Property resourceGroupIds: The list of resource group IDs.
         * <p>
         * @return {@code this}
         * @param resourceGroupIds Property resourceGroupIds: The list of resource group IDs. This parameter is required.
         */
        public Builder resourceGroupIds(final java.util.List<? extends java.lang.Object> resourceGroupIds) {
            this.props.resourceGroupIds(resourceGroupIds);
            return this;
        }

        /**
         * Property resourceType: The type of the resource.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the resource. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The type of the resource.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the resource. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Quota}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Quota build() {
            return new com.aliyun.ros.cdk.pai.Quota(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
