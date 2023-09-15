package com.aliyun.ros.cdk.mongodb.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::MONGODB::InstanceClasses</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.339Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.datasource.InstanceClasses")
public class InstanceClasses extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceClasses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceClasses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::MONGODB::InstanceClasses</code>.
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
    public InstanceClasses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.datasource.InstanceClassesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::MONGODB::InstanceClasses</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public InstanceClasses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.datasource.InstanceClassesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::MONGODB::InstanceClasses</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public InstanceClasses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceClasses: The list of The instance classes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClasses() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClasses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceClassIds: The list of The instance class Ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClassIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClassIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.datasource.InstanceClasses}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.datasource.InstanceClasses> {
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
        private com.aliyun.ros.cdk.mongodb.datasource.InstanceClassesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dbType: The database engine type of the instance.
         * <p>
         * normal: replica set instance
         * sharding: sharded cluster instance
         * <p>
         * @return {@code this}
         * @param dbType Property dbType: The database engine type of the instance. This parameter is required.
         */
        public Builder dbType(final java.lang.String dbType) {
            this.props().dbType(dbType);
            return this;
        }
        /**
         * Property dbType: The database engine type of the instance.
         * <p>
         * normal: replica set instance
         * sharding: sharded cluster instance
         * <p>
         * @return {@code this}
         * @param dbType Property dbType: The database engine type of the instance. This parameter is required.
         */
        public Builder dbType(final com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.props().dbType(dbType);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Default value: PostPaid. Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Default value: PostPaid. Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * You can call the DescribeRegions operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * You can call the DescribeRegions operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.datasource.InstanceClasses}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.datasource.InstanceClasses build() {
            return new com.aliyun.ros.cdk.mongodb.datasource.InstanceClasses(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.mongodb.datasource.InstanceClassesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.mongodb.datasource.InstanceClassesProps.Builder();
            }
            return this.props;
        }
    }
}
