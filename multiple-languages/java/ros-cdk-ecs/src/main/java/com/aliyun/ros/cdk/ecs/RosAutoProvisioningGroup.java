package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::AutoProvisioningGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.717Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup")
public class RosAutoProvisioningGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAutoProvisioningGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAutoProvisioningGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAutoProvisioningGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoProvisioningGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoProvisioningGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", java.util.Objects.requireNonNull(value, "launchTemplateId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getTotalTargetCapacity() {
        return software.amazon.jsii.Kernel.get(this, "totalTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTotalTargetCapacity(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "totalTargetCapacity", java.util.Objects.requireNonNull(value, "totalTargetCapacity is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAutoProvisioningGroupName() {
        return software.amazon.jsii.Kernel.get(this, "autoProvisioningGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAutoProvisioningGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoProvisioningGroupName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAutoProvisioningGroupType() {
        return software.amazon.jsii.Kernel.get(this, "autoProvisioningGroupType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAutoProvisioningGroupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoProvisioningGroupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDefaultTargetCapacityType() {
        return software.amazon.jsii.Kernel.get(this, "defaultTargetCapacityType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDefaultTargetCapacityType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultTargetCapacityType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getExcessCapacityTerminationPolicy() {
        return software.amazon.jsii.Kernel.get(this, "excessCapacityTerminationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setExcessCapacityTerminationPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excessCapacityTerminationPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateConfig() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateConfig", value);
    }

    /**
     */
    public void setLaunchTemplateConfig(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLaunchTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getMaxSpotPrice() {
        return software.amazon.jsii.Kernel.get(this, "maxSpotPrice", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMaxSpotPrice(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxSpotPrice", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPayAsYouGoAllocationStrategy() {
        return software.amazon.jsii.Kernel.get(this, "payAsYouGoAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPayAsYouGoAllocationStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payAsYouGoAllocationStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPayAsYouGoTargetCapacity() {
        return software.amazon.jsii.Kernel.get(this, "payAsYouGoTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPayAsYouGoTargetCapacity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payAsYouGoTargetCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSpotAllocationStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSpotAllocationStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotAllocationStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSpotInstanceInterruptionBehavior() {
        return software.amazon.jsii.Kernel.get(this, "spotInstanceInterruptionBehavior", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSpotInstanceInterruptionBehavior(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotInstanceInterruptionBehavior", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getSpotInstancePoolsToUseCount() {
        return software.amazon.jsii.Kernel.get(this, "spotInstancePoolsToUseCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setSpotInstancePoolsToUseCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotInstancePoolsToUseCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSpotTargetCapacity() {
        return software.amazon.jsii.Kernel.get(this, "spotTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSpotTargetCapacity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotTargetCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTerminateInstances() {
        return software.amazon.jsii.Kernel.get(this, "terminateInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTerminateInstances(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstances", value);
    }

    /**
     */
    public void setTerminateInstances(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstances", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTerminateInstancesWithExpiration() {
        return software.amazon.jsii.Kernel.get(this, "terminateInstancesWithExpiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTerminateInstancesWithExpiration(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstancesWithExpiration", value);
    }

    /**
     */
    public void setTerminateInstancesWithExpiration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstancesWithExpiration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getValidFrom() {
        return software.amazon.jsii.Kernel.get(this, "validFrom", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setValidFrom(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "validFrom", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getValidUntil() {
        return software.amazon.jsii.Kernel.get(this, "validUntil", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setValidUntil(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "validUntil", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(LaunchTemplateConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LaunchTemplateConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getMaxPrice();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getWeightedCapacity() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LaunchTemplateConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LaunchTemplateConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LaunchTemplateConfigProperty> {
            private java.lang.Number maxPrice;
            private java.lang.String vSwitchId;
            private java.lang.String instanceType;
            private java.lang.Number priority;
            private java.lang.Number weightedCapacity;

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getMaxPrice}
             * @param maxPrice the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPrice(java.lang.Number maxPrice) {
                this.maxPrice = maxPrice;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getWeightedCapacity}
             * @param weightedCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weightedCapacity(java.lang.Number weightedCapacity) {
                this.weightedCapacity = weightedCapacity;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LaunchTemplateConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LaunchTemplateConfigProperty build() {
                return new Jsii$Proxy(maxPrice, vSwitchId, instanceType, priority, weightedCapacity);
            }
        }

        /**
         * An implementation for {@link LaunchTemplateConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchTemplateConfigProperty {
            private final java.lang.Number maxPrice;
            private final java.lang.String vSwitchId;
            private final java.lang.String instanceType;
            private final java.lang.Number priority;
            private final java.lang.Number weightedCapacity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.maxPrice = software.amazon.jsii.Kernel.get(this, "maxPrice", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.weightedCapacity = software.amazon.jsii.Kernel.get(this, "weightedCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Number maxPrice, final java.lang.String vSwitchId, final java.lang.String instanceType, final java.lang.Number priority, final java.lang.Number weightedCapacity) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.maxPrice = java.util.Objects.requireNonNull(maxPrice, "maxPrice is required");
                this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
                this.instanceType = instanceType;
                this.priority = priority;
                this.weightedCapacity = weightedCapacity;
            }

            @Override
            public final java.lang.Number getMaxPrice() {
                return this.maxPrice;
            }

            @Override
            public final java.lang.String getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            public final java.lang.String getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Number getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Number getWeightedCapacity() {
                return this.weightedCapacity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("maxPrice", om.valueToTree(this.getMaxPrice()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getWeightedCapacity() != null) {
                    data.set("weightedCapacity", om.valueToTree(this.getWeightedCapacity()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LaunchTemplateConfigProperty.Jsii$Proxy that = (LaunchTemplateConfigProperty.Jsii$Proxy) o;

                if (!maxPrice.equals(that.maxPrice)) return false;
                if (!vSwitchId.equals(that.vSwitchId)) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                return this.weightedCapacity != null ? this.weightedCapacity.equals(that.weightedCapacity) : that.weightedCapacity == null;
            }

            @Override
            public final int hashCode() {
                int result = this.maxPrice.hashCode();
                result = 31 * result + (this.vSwitchId.hashCode());
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.weightedCapacity != null ? this.weightedCapacity.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param totalTargetCapacity This parameter is required.
         */
        public Builder totalTargetCapacity(final java.lang.String totalTargetCapacity) {
            this.props.totalTargetCapacity(totalTargetCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoProvisioningGroupName This parameter is required.
         */
        public Builder autoProvisioningGroupName(final java.lang.String autoProvisioningGroupName) {
            this.props.autoProvisioningGroupName(autoProvisioningGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoProvisioningGroupType This parameter is required.
         */
        public Builder autoProvisioningGroupType(final java.lang.String autoProvisioningGroupType) {
            this.props.autoProvisioningGroupType(autoProvisioningGroupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultTargetCapacityType This parameter is required.
         */
        public Builder defaultTargetCapacityType(final java.lang.String defaultTargetCapacityType) {
            this.props.defaultTargetCapacityType(defaultTargetCapacityType);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param excessCapacityTerminationPolicy This parameter is required.
         */
        public Builder excessCapacityTerminationPolicy(final java.lang.String excessCapacityTerminationPolicy) {
            this.props.excessCapacityTerminationPolicy(excessCapacityTerminationPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateConfig This parameter is required.
         */
        public Builder launchTemplateConfig(final com.aliyun.ros.cdk.core.IResolvable launchTemplateConfig) {
            this.props.launchTemplateConfig(launchTemplateConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateConfig This parameter is required.
         */
        public Builder launchTemplateConfig(final java.util.List<? extends java.lang.Object> launchTemplateConfig) {
            this.props.launchTemplateConfig(launchTemplateConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxSpotPrice This parameter is required.
         */
        public Builder maxSpotPrice(final java.lang.Number maxSpotPrice) {
            this.props.maxSpotPrice(maxSpotPrice);
            return this;
        }

        /**
         * @return {@code this}
         * @param payAsYouGoAllocationStrategy This parameter is required.
         */
        public Builder payAsYouGoAllocationStrategy(final java.lang.String payAsYouGoAllocationStrategy) {
            this.props.payAsYouGoAllocationStrategy(payAsYouGoAllocationStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param payAsYouGoTargetCapacity This parameter is required.
         */
        public Builder payAsYouGoTargetCapacity(final java.lang.String payAsYouGoTargetCapacity) {
            this.props.payAsYouGoTargetCapacity(payAsYouGoTargetCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotAllocationStrategy This parameter is required.
         */
        public Builder spotAllocationStrategy(final java.lang.String spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInstanceInterruptionBehavior This parameter is required.
         */
        public Builder spotInstanceInterruptionBehavior(final java.lang.String spotInstanceInterruptionBehavior) {
            this.props.spotInstanceInterruptionBehavior(spotInstanceInterruptionBehavior);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInstancePoolsToUseCount This parameter is required.
         */
        public Builder spotInstancePoolsToUseCount(final java.lang.Number spotInstancePoolsToUseCount) {
            this.props.spotInstancePoolsToUseCount(spotInstancePoolsToUseCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotTargetCapacity This parameter is required.
         */
        public Builder spotTargetCapacity(final java.lang.String spotTargetCapacity) {
            this.props.spotTargetCapacity(spotTargetCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminateInstances This parameter is required.
         */
        public Builder terminateInstances(final java.lang.Boolean terminateInstances) {
            this.props.terminateInstances(terminateInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param terminateInstances This parameter is required.
         */
        public Builder terminateInstances(final com.aliyun.ros.cdk.core.IResolvable terminateInstances) {
            this.props.terminateInstances(terminateInstances);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminateInstancesWithExpiration This parameter is required.
         */
        public Builder terminateInstancesWithExpiration(final java.lang.Boolean terminateInstancesWithExpiration) {
            this.props.terminateInstancesWithExpiration(terminateInstancesWithExpiration);
            return this;
        }
        /**
         * @return {@code this}
         * @param terminateInstancesWithExpiration This parameter is required.
         */
        public Builder terminateInstancesWithExpiration(final com.aliyun.ros.cdk.core.IResolvable terminateInstancesWithExpiration) {
            this.props.terminateInstancesWithExpiration(terminateInstancesWithExpiration);
            return this;
        }

        /**
         * @return {@code this}
         * @param validFrom This parameter is required.
         */
        public Builder validFrom(final java.lang.String validFrom) {
            this.props.validFrom(validFrom);
            return this;
        }

        /**
         * @return {@code this}
         * @param validUntil This parameter is required.
         */
        public Builder validUntil(final java.lang.String validUntil) {
            this.props.validUntil(validUntil);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup build() {
            return new com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
