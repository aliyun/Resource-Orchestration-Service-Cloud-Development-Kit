package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::DiskCategories</code>, which is used to query the information about disk categories.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.743Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DiskCategories")
public class DiskCategories extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.datasource.IDiskCategories {

    protected DiskCategories(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DiskCategories(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DiskCategories(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskCategoriesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DiskCategories(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskCategoriesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DiskCategories: The list of disk categories.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCategories() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskCategories", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskCategoryIds: The list of disk category IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCategoryIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskCategoryIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskCategoriesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DiskCategoriesProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.DiskCategories}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.DiskCategories> {
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
        private final com.aliyun.ros.cdk.ecs.datasource.DiskCategoriesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.datasource.DiskCategoriesProps.Builder();
        }

        /**
         * Property type: The resource type to query.
         * <p>
         * If you set Type to data,you can specify the InstanceType parameter to disk.
         * If you set Type to system, you must specify the InstanceType parameter.
         * Valid values:
         * system: system disk
         * data: data disk
         * <p>
         * @return {@code this}
         * @param type Property type: The resource type to query. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The resource type to query.
         * <p>
         * If you set Type to data,you can specify the InstanceType parameter to disk.
         * If you set Type to system, you must specify the InstanceType parameter.
         * Valid values:
         * system: system disk
         * data: data disk
         * <p>
         * @return {@code this}
         * @param type Property type: The resource type to query. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone for which to query resources.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone for which to query resources.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property dataDiskCategory: The category of the data disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: ESSD
         * <p>
         * @return {@code this}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk. This parameter is required.
         */
        public Builder dataDiskCategory(final java.lang.String dataDiskCategory) {
            this.props.dataDiskCategory(dataDiskCategory);
            return this;
        }
        /**
         * Property dataDiskCategory: The category of the data disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: ESSD
         * <p>
         * @return {@code this}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk. This parameter is required.
         */
        public Builder dataDiskCategory(final com.aliyun.ros.cdk.core.IResolvable dataDiskCategory) {
            this.props.dataDiskCategory(dataDiskCategory);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
         * When the Type parameter is set to system or data,you must set the InstanceType parameter.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type.
         * <p>
         * For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
         * When the Type parameter is set to system or data,you must set the InstanceType parameter.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property systemDiskCategory: The category of the system disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: ESSD
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * Property systemDiskCategory: The category of the system disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: ESSD
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.DiskCategories}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.DiskCategories build() {
            return new com.aliyun.ros.cdk.ecs.datasource.DiskCategories(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
