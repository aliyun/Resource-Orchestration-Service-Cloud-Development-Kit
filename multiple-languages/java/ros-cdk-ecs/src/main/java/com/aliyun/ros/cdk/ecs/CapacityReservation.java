package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::CapacityReservation</code>, which is used to create a capacity reservation.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CapacityReservation")
public class CapacityReservation extends com.aliyun.ros.cdk.core.Resource {

    protected CapacityReservation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CapacityReservation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CapacityReservation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CapacityReservationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CapacityReservation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CapacityReservationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PrivatePoolOptionsId: The ID of the capacity reservation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivatePoolOptionsId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CapacityReservationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.CapacityReservationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CapacityReservationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.CapacityReservation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.CapacityReservation> {
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
        private final com.aliyun.ros.cdk.ecs.CapacityReservationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.CapacityReservationProps.Builder();
        }

        /**
         * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
         * <p>
         * @return {@code this}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         */
        public Builder instanceAmount(final java.lang.Number instanceAmount) {
            this.props.instanceAmount(instanceAmount);
            return this;
        }
        /**
         * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
         * <p>
         * @return {@code this}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         */
        public Builder instanceAmount(final com.aliyun.ros.cdk.core.IResolvable instanceAmount) {
            this.props.instanceAmount(instanceAmount);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
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
         * A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property zoneId: The ID of zone N within the region in which to create the capacity reservation.
         * <p>
         * A capacity reservation can reserve resources within only a single zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of zone N within the region in which to create the capacity reservation. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of zone N within the region in which to create the capacity reservation.
         * <p>
         * A capacity reservation can reserve resources within only a single zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of zone N within the region in which to create the capacity reservation. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property description: The description of the capacity reservation.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the capacity reservation. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the capacity reservation.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the capacity reservation. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property endTime: The time when the capacity reservation expires.
         * <p>
         * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the capacity reservation expires. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The time when the capacity reservation expires.
         * <p>
         * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the capacity reservation expires. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property endTimeType: The release mode of the capacity reservation.
         * <p>
         * Valid values:
         * Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
         * Unlimited: The capacity reservation must be manually released. You can release it anytime.
         * <p>
         * @return {@code this}
         * @param endTimeType Property endTimeType: The release mode of the capacity reservation. This parameter is required.
         */
        public Builder endTimeType(final java.lang.String endTimeType) {
            this.props.endTimeType(endTimeType);
            return this;
        }
        /**
         * Property endTimeType: The release mode of the capacity reservation.
         * <p>
         * Valid values:
         * Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
         * Unlimited: The capacity reservation must be manually released. You can release it anytime.
         * <p>
         * @return {@code this}
         * @param endTimeType Property endTimeType: The release mode of the capacity reservation. This parameter is required.
         */
        public Builder endTimeType(final com.aliyun.ros.cdk.core.IResolvable endTimeType) {
            this.props.endTimeType(endTimeType);
            return this;
        }

        /**
         * Property privatePoolOptions:.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions:. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }
        /**
         * Property privatePoolOptions:.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions:. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.ecs.RosCapacityReservation.PrivatePoolOptionsProperty privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags:.
         * <p>
         * @return {@code this}
         * @param tags Property tags:. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.CapacityReservation}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.CapacityReservation build() {
            return new com.aliyun.ros.cdk.ecs.CapacityReservation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
