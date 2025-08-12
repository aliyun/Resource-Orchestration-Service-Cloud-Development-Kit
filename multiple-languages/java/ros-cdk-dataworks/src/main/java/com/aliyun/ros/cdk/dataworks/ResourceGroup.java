package com.aliyun.ros.cdk.dataworks;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DataWorks::ResourceGroup</code>, which is used to create a serverless resource group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.330Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.ResourceGroup")
public class ResourceGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dataworks.IResourceGroup {

    protected ResourceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ResourceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ResourceGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ResourceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ResourceGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Id: Creates a unique identifier for a common resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ResourceGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.ResourceGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dataworks.ResourceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dataworks.ResourceGroup> {
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
        private final com.aliyun.ros.cdk.dataworks.ResourceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dataworks.ResourceGroupProps.Builder();
        }

        /**
         * Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property vpcId: The default bound VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The default bound VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The default bound VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The default bound VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The default bound switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The default bound switch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The default bound switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The default bound switch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property autoRenewEnabled: Whether to renew automatically.
         * <p>
         * @return {@code this}
         * @param autoRenewEnabled Property autoRenewEnabled: Whether to renew automatically. This parameter is required.
         */
        public Builder autoRenewEnabled(final java.lang.Boolean autoRenewEnabled) {
            this.props.autoRenewEnabled(autoRenewEnabled);
            return this;
        }
        /**
         * Property autoRenewEnabled: Whether to renew automatically.
         * <p>
         * @return {@code this}
         * @param autoRenewEnabled Property autoRenewEnabled: Whether to renew automatically. This parameter is required.
         */
        public Builder autoRenewEnabled(final com.aliyun.ros.cdk.core.IResolvable autoRenewEnabled) {
            this.props.autoRenewEnabled(autoRenewEnabled);
            return this;
        }

        /**
         * Property paymentDuration: Paid time.
         * <p>
         * Default is 1.
         * <p>
         * @return {@code this}
         * @param paymentDuration Property paymentDuration: Paid time. This parameter is required.
         */
        public Builder paymentDuration(final java.lang.Number paymentDuration) {
            this.props.paymentDuration(paymentDuration);
            return this;
        }
        /**
         * Property paymentDuration: Paid time.
         * <p>
         * Default is 1.
         * <p>
         * @return {@code this}
         * @param paymentDuration Property paymentDuration: Paid time. This parameter is required.
         */
        public Builder paymentDuration(final com.aliyun.ros.cdk.core.IResolvable paymentDuration) {
            this.props.paymentDuration(paymentDuration);
            return this;
        }

        /**
         * Property paymentDurationUnit: Paid time unit.
         * <p>
         * Valid values:
         * Month: represents monthly subscription
         * Year: represents annual subscription.
         * Default is Month.
         * <p>
         * @return {@code this}
         * @param paymentDurationUnit Property paymentDurationUnit: Paid time unit. This parameter is required.
         */
        public Builder paymentDurationUnit(final java.lang.String paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }
        /**
         * Property paymentDurationUnit: Paid time unit.
         * <p>
         * Valid values:
         * Month: represents monthly subscription
         * Year: represents annual subscription.
         * Default is Month.
         * <p>
         * @return {@code this}
         * @param paymentDurationUnit Property paymentDurationUnit: Paid time unit. This parameter is required.
         */
        public Builder paymentDurationUnit(final com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }

        /**
         * Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property resourceGroupId: Alibaba Cloud Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Alibaba Cloud Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Alibaba Cloud Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Alibaba Cloud Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid. This parameter is required.
         */
        public Builder spec(final java.lang.Number spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property tags: Tags to attach to ResourceGroup.
         * <p>
         * Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to ResourceGroup. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dataworks.ResourceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.dataworks.ResourceGroup build() {
            return new com.aliyun.ros.cdk.dataworks.ResourceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
