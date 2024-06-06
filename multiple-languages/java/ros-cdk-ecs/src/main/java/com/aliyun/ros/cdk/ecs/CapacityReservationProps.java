package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>CapacityReservation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.177Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CapacityReservationProps")
@software.amazon.jsii.Jsii.Proxy(CapacityReservationProps.Jsii$Proxy.class)
public interface CapacityReservationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceAmount();

    /**
     * Property instanceType: The instance type.
     * <p>
     * A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property zoneId: The ID of zone N within the region in which to create the capacity reservation.
     * <p>
     * A capacity reservation can reserve resources within only a single zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property description: The description of the capacity reservation.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     * This parameter is empty by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property endTime: The time when the capacity reservation expires.
     * <p>
     * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
        return null;
    }

    /**
     * Property endTimeType: The release mode of the capacity reservation.
     * <p>
     * Valid values:
     * Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
     * Unlimited: The capacity reservation must be manually released. You can release it anytime.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndTimeType() {
        return null;
    }

    /**
     * Property privatePoolOptions:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivatePoolOptions() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags:.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CapacityReservationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CapacityReservationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CapacityReservationProps> {
        java.lang.Object instanceAmount;
        java.lang.Object instanceType;
        java.lang.Object zoneId;
        java.lang.Object description;
        java.lang.Object endTime;
        java.lang.Object endTimeType;
        java.lang.Object privatePoolOptions;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty> tags;

        /**
         * Sets the value of {@link CapacityReservationProps#getInstanceAmount}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAmount(java.lang.Number instanceAmount) {
            this.instanceAmount = instanceAmount;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getInstanceAmount}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAmount(com.aliyun.ros.cdk.core.IResolvable instanceAmount) {
            this.instanceAmount = instanceAmount;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         *                     A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         *                     A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getZoneId}
         * @param zoneId Property zoneId: The ID of zone N within the region in which to create the capacity reservation. This parameter is required.
         *               A capacity reservation can reserve resources within only a single zone.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getZoneId}
         * @param zoneId Property zoneId: The ID of zone N within the region in which to create the capacity reservation. This parameter is required.
         *               A capacity reservation can reserve resources within only a single zone.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getDescription}
         * @param description Property description: The description of the capacity reservation.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         *                    This parameter is empty by default.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getDescription}
         * @param description Property description: The description of the capacity reservation.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         *                    This parameter is empty by default.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getEndTime}
         * @param endTime Property endTime: The time when the capacity reservation expires.
         *                Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getEndTime}
         * @param endTime Property endTime: The time when the capacity reservation expires.
         *                Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getEndTimeType}
         * @param endTimeType Property endTimeType: The release mode of the capacity reservation.
         *                    Valid values:
         *                    Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
         *                    Unlimited: The capacity reservation must be manually released. You can release it anytime.
         * @return {@code this}
         */
        public Builder endTimeType(java.lang.String endTimeType) {
            this.endTimeType = endTimeType;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getEndTimeType}
         * @param endTimeType Property endTimeType: The release mode of the capacity reservation.
         *                    Valid values:
         *                    Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
         *                    Unlimited: The capacity reservation must be manually released. You can release it anytime.
         * @return {@code this}
         */
        public Builder endTimeType(com.aliyun.ros.cdk.core.IResolvable endTimeType) {
            this.endTimeType = endTimeType;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getPrivatePoolOptions}
         * @param privatePoolOptions Property privatePoolOptions:.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getPrivatePoolOptions}
         * @param privatePoolOptions Property privatePoolOptions:.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.ecs.RosCapacityReservation.PrivatePoolOptionsProperty privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CapacityReservationProps#getTags}
         * @param tags Property tags:.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CapacityReservationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CapacityReservationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CapacityReservationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CapacityReservationProps {
        private final java.lang.Object instanceAmount;
        private final java.lang.Object instanceType;
        private final java.lang.Object zoneId;
        private final java.lang.Object description;
        private final java.lang.Object endTime;
        private final java.lang.Object endTimeType;
        private final java.lang.Object privatePoolOptions;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceAmount = software.amazon.jsii.Kernel.get(this, "instanceAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTimeType = software.amazon.jsii.Kernel.get(this, "endTimeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privatePoolOptions = software.amazon.jsii.Kernel.get(this, "privatePoolOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceAmount = java.util.Objects.requireNonNull(builder.instanceAmount, "instanceAmount is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.description = builder.description;
            this.endTime = builder.endTime;
            this.endTimeType = builder.endTimeType;
            this.privatePoolOptions = builder.privatePoolOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getInstanceAmount() {
            return this.instanceAmount;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getEndTimeType() {
            return this.endTimeType;
        }

        @Override
        public final java.lang.Object getPrivatePoolOptions() {
            return this.privatePoolOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosCapacityReservation.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceAmount", om.valueToTree(this.getInstanceAmount()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEndTime() != null) {
                data.set("endTime", om.valueToTree(this.getEndTime()));
            }
            if (this.getEndTimeType() != null) {
                data.set("endTimeType", om.valueToTree(this.getEndTimeType()));
            }
            if (this.getPrivatePoolOptions() != null) {
                data.set("privatePoolOptions", om.valueToTree(this.getPrivatePoolOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.CapacityReservationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CapacityReservationProps.Jsii$Proxy that = (CapacityReservationProps.Jsii$Proxy) o;

            if (!instanceAmount.equals(that.instanceAmount)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.endTime != null ? !this.endTime.equals(that.endTime) : that.endTime != null) return false;
            if (this.endTimeType != null ? !this.endTimeType.equals(that.endTimeType) : that.endTimeType != null) return false;
            if (this.privatePoolOptions != null ? !this.privatePoolOptions.equals(that.privatePoolOptions) : that.privatePoolOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceAmount.hashCode();
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.endTime != null ? this.endTime.hashCode() : 0);
            result = 31 * result + (this.endTimeType != null ? this.endTimeType.hashCode() : 0);
            result = 31 * result + (this.privatePoolOptions != null ? this.privatePoolOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
