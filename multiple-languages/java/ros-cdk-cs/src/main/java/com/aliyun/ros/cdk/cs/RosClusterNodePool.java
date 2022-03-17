package com.aliyun.ros.cdk.cs;

/**
 * A ROS template type:  `ALIYUN::CS::ClusterNodePool`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:14.841Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool")
public class RosClusterNodePool extends com.aliyun.ros.cdk.core.RosResource {

    protected RosClusterNodePool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosClusterNodePool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cs.RosClusterNodePool.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CS::ClusterNodePool`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosClusterNodePool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.RosClusterNodePoolProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodePoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodePoolId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroup() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroup", java.util.Objects.requireNonNull(value, "scalingGroup is required"));
    }

    /**
     */
    public void setScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.RosClusterNodePool.ScalingGroupProperty value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroup", java.util.Objects.requireNonNull(value, "scalingGroup is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoScaling() {
        return software.amazon.jsii.Kernel.get(this, "autoScaling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoScaling(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoScaling", value);
    }

    /**
     */
    public void setAutoScaling(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosClusterNodePool.AutoScalingProperty value) {
        software.amazon.jsii.Kernel.set(this, "autoScaling", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "count", value);
    }

    /**
     */
    public void setCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "count", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesConfig() {
        return software.amazon.jsii.Kernel.get(this, "kubernetesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKubernetesConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kubernetesConfig", value);
    }

    /**
     */
    public void setKubernetesConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosClusterNodePool.KubernetesConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "kubernetesConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getManagement() {
        return software.amazon.jsii.Kernel.get(this, "management", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setManagement(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "management", value);
    }

    /**
     */
    public void setManagement(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosClusterNodePool.ManagementProperty value) {
        software.amazon.jsii.Kernel.set(this, "management", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodePoolInfo() {
        return software.amazon.jsii.Kernel.get(this, "nodePoolInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodePoolInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodePoolInfo", value);
    }

    /**
     */
    public void setNodePoolInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosClusterNodePool.NodePoolInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "nodePoolInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTeeConfig() {
        return software.amazon.jsii.Kernel.get(this, "teeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTeeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "teeConfig", value);
    }

    /**
     */
    public void setTeeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosClusterNodePool.TeeConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "teeConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty")
    @software.amazon.jsii.Jsii.Proxy(AutoScalingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AutoScalingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEipBandwidth() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEipInternetChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsBondEip() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxInstances() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMinInstances() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AutoScalingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AutoScalingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AutoScalingProperty> {
            java.lang.Object enable;
            java.lang.Object eipBandwidth;
            java.lang.Object eipInternetChargeType;
            java.lang.Object isBondEip;
            java.lang.Object maxInstances;
            java.lang.Object minInstances;
            java.lang.Object type;

            /**
             * Sets the value of {@link AutoScalingProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getEipBandwidth}
             * @param eipBandwidth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder eipBandwidth(java.lang.Number eipBandwidth) {
                this.eipBandwidth = eipBandwidth;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getEipBandwidth}
             * @param eipBandwidth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder eipBandwidth(com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
                this.eipBandwidth = eipBandwidth;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getEipInternetChargeType}
             * @param eipInternetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder eipInternetChargeType(java.lang.String eipInternetChargeType) {
                this.eipInternetChargeType = eipInternetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getEipInternetChargeType}
             * @param eipInternetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder eipInternetChargeType(com.aliyun.ros.cdk.core.IResolvable eipInternetChargeType) {
                this.eipInternetChargeType = eipInternetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getIsBondEip}
             * @param isBondEip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isBondEip(java.lang.Boolean isBondEip) {
                this.isBondEip = isBondEip;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getIsBondEip}
             * @param isBondEip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isBondEip(com.aliyun.ros.cdk.core.IResolvable isBondEip) {
                this.isBondEip = isBondEip;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getMaxInstances}
             * @param maxInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxInstances(java.lang.Number maxInstances) {
                this.maxInstances = maxInstances;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getMaxInstances}
             * @param maxInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxInstances(com.aliyun.ros.cdk.core.IResolvable maxInstances) {
                this.maxInstances = maxInstances;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getMinInstances}
             * @param minInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minInstances(java.lang.Number minInstances) {
                this.minInstances = minInstances;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getMinInstances}
             * @param minInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minInstances(com.aliyun.ros.cdk.core.IResolvable minInstances) {
                this.minInstances = minInstances;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link AutoScalingProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AutoScalingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AutoScalingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AutoScalingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoScalingProperty {
            private final java.lang.Object enable;
            private final java.lang.Object eipBandwidth;
            private final java.lang.Object eipInternetChargeType;
            private final java.lang.Object isBondEip;
            private final java.lang.Object maxInstances;
            private final java.lang.Object minInstances;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.eipBandwidth = software.amazon.jsii.Kernel.get(this, "eipBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.eipInternetChargeType = software.amazon.jsii.Kernel.get(this, "eipInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isBondEip = software.amazon.jsii.Kernel.get(this, "isBondEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxInstances = software.amazon.jsii.Kernel.get(this, "maxInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minInstances = software.amazon.jsii.Kernel.get(this, "minInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
                this.eipBandwidth = builder.eipBandwidth;
                this.eipInternetChargeType = builder.eipInternetChargeType;
                this.isBondEip = builder.isBondEip;
                this.maxInstances = builder.maxInstances;
                this.minInstances = builder.minInstances;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getEipBandwidth() {
                return this.eipBandwidth;
            }

            @Override
            public final java.lang.Object getEipInternetChargeType() {
                return this.eipInternetChargeType;
            }

            @Override
            public final java.lang.Object getIsBondEip() {
                return this.isBondEip;
            }

            @Override
            public final java.lang.Object getMaxInstances() {
                return this.maxInstances;
            }

            @Override
            public final java.lang.Object getMinInstances() {
                return this.minInstances;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enable", om.valueToTree(this.getEnable()));
                if (this.getEipBandwidth() != null) {
                    data.set("eipBandwidth", om.valueToTree(this.getEipBandwidth()));
                }
                if (this.getEipInternetChargeType() != null) {
                    data.set("eipInternetChargeType", om.valueToTree(this.getEipInternetChargeType()));
                }
                if (this.getIsBondEip() != null) {
                    data.set("isBondEip", om.valueToTree(this.getIsBondEip()));
                }
                if (this.getMaxInstances() != null) {
                    data.set("maxInstances", om.valueToTree(this.getMaxInstances()));
                }
                if (this.getMinInstances() != null) {
                    data.set("minInstances", om.valueToTree(this.getMinInstances()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AutoScalingProperty.Jsii$Proxy that = (AutoScalingProperty.Jsii$Proxy) o;

                if (!enable.equals(that.enable)) return false;
                if (this.eipBandwidth != null ? !this.eipBandwidth.equals(that.eipBandwidth) : that.eipBandwidth != null) return false;
                if (this.eipInternetChargeType != null ? !this.eipInternetChargeType.equals(that.eipInternetChargeType) : that.eipInternetChargeType != null) return false;
                if (this.isBondEip != null ? !this.isBondEip.equals(that.isBondEip) : that.isBondEip != null) return false;
                if (this.maxInstances != null ? !this.maxInstances.equals(that.maxInstances) : that.maxInstances != null) return false;
                if (this.minInstances != null ? !this.minInstances.equals(that.minInstances) : that.minInstances != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable.hashCode();
                result = 31 * result + (this.eipBandwidth != null ? this.eipBandwidth.hashCode() : 0);
                result = 31 * result + (this.eipInternetChargeType != null ? this.eipInternetChargeType.hashCode() : 0);
                result = 31 * result + (this.isBondEip != null ? this.isBondEip.hashCode() : 0);
                result = 31 * result + (this.maxInstances != null ? this.maxInstances.hashCode() : 0);
                result = 31 * result + (this.minInstances != null ? this.minInstances.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(DataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSize() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataDisksProperty> {
            java.lang.Object autoSnapshotPolicyId;
            java.lang.Object category;
            java.lang.Object encrypted;
            java.lang.Object performanceLevel;
            java.lang.Object size;

            /**
             * Sets the value of {@link DataDisksProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(java.lang.Boolean encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataDisksProperty {
            private final java.lang.Object autoSnapshotPolicyId;
            private final java.lang.Object category;
            private final java.lang.Object encrypted;
            private final java.lang.Object performanceLevel;
            private final java.lang.Object size;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
                this.category = builder.category;
                this.encrypted = builder.encrypted;
                this.performanceLevel = builder.performanceLevel;
                this.size = builder.size;
            }

            @Override
            public final java.lang.Object getAutoSnapshotPolicyId() {
                return this.autoSnapshotPolicyId;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getEncrypted() {
                return this.encrypted;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoSnapshotPolicyId() != null) {
                    data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
                }
                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getEncrypted() != null) {
                    data.set("encrypted", om.valueToTree(this.getEncrypted()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getSize() != null) {
                    data.set("size", om.valueToTree(this.getSize()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataDisksProperty.Jsii$Proxy that = (DataDisksProperty.Jsii$Proxy) o;

                if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                return this.size != null ? this.size.equals(that.size) : that.size == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0;
                result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
                result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.size != null ? this.size.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(KubernetesConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface KubernetesConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuntime();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuntimeVersion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCmsEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpuPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeNameMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTaints() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUnschedulable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link KubernetesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link KubernetesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<KubernetesConfigProperty> {
            java.lang.Object runtime;
            java.lang.Object runtimeVersion;
            java.lang.Object cmsEnabled;
            java.lang.Object cpuPolicy;
            java.lang.Object labels;
            java.lang.Object nodeNameMode;
            java.lang.Object taints;
            java.lang.Object unschedulable;
            java.lang.Object userData;

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntime}
             * @param runtime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtime(java.lang.String runtime) {
                this.runtime = runtime;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntime}
             * @param runtime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
                this.runtime = runtime;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntimeVersion}
             * @param runtimeVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtimeVersion(java.lang.String runtimeVersion) {
                this.runtimeVersion = runtimeVersion;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntimeVersion}
             * @param runtimeVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtimeVersion(com.aliyun.ros.cdk.core.IResolvable runtimeVersion) {
                this.runtimeVersion = runtimeVersion;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getCmsEnabled}
             * @param cmsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cmsEnabled(java.lang.Boolean cmsEnabled) {
                this.cmsEnabled = cmsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getCmsEnabled}
             * @param cmsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cmsEnabled(com.aliyun.ros.cdk.core.IResolvable cmsEnabled) {
                this.cmsEnabled = cmsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getCpuPolicy}
             * @param cpuPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpuPolicy(java.lang.String cpuPolicy) {
                this.cpuPolicy = cpuPolicy;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getCpuPolicy}
             * @param cpuPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpuPolicy(com.aliyun.ros.cdk.core.IResolvable cpuPolicy) {
                this.cpuPolicy = cpuPolicy;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(java.util.List<? extends java.lang.Object> labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getNodeNameMode}
             * @param nodeNameMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeNameMode(java.lang.String nodeNameMode) {
                this.nodeNameMode = nodeNameMode;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getNodeNameMode}
             * @param nodeNameMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeNameMode(com.aliyun.ros.cdk.core.IResolvable nodeNameMode) {
                this.nodeNameMode = nodeNameMode;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getTaints}
             * @param taints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder taints(com.aliyun.ros.cdk.core.IResolvable taints) {
                this.taints = taints;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getTaints}
             * @param taints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder taints(java.util.List<? extends java.lang.Object> taints) {
                this.taints = taints;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getUnschedulable}
             * @param unschedulable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unschedulable(java.lang.Boolean unschedulable) {
                this.unschedulable = unschedulable;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getUnschedulable}
             * @param unschedulable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unschedulable(com.aliyun.ros.cdk.core.IResolvable unschedulable) {
                this.unschedulable = unschedulable;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getUserData}
             * @param userData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userData(java.lang.String userData) {
                this.userData = userData;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getUserData}
             * @param userData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
                this.userData = userData;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link KubernetesConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public KubernetesConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link KubernetesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KubernetesConfigProperty {
            private final java.lang.Object runtime;
            private final java.lang.Object runtimeVersion;
            private final java.lang.Object cmsEnabled;
            private final java.lang.Object cpuPolicy;
            private final java.lang.Object labels;
            private final java.lang.Object nodeNameMode;
            private final java.lang.Object taints;
            private final java.lang.Object unschedulable;
            private final java.lang.Object userData;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.runtimeVersion = software.amazon.jsii.Kernel.get(this, "runtimeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cmsEnabled = software.amazon.jsii.Kernel.get(this, "cmsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpuPolicy = software.amazon.jsii.Kernel.get(this, "cpuPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeNameMode = software.amazon.jsii.Kernel.get(this, "nodeNameMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.taints = software.amazon.jsii.Kernel.get(this, "taints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.unschedulable = software.amazon.jsii.Kernel.get(this, "unschedulable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.runtime = java.util.Objects.requireNonNull(builder.runtime, "runtime is required");
                this.runtimeVersion = java.util.Objects.requireNonNull(builder.runtimeVersion, "runtimeVersion is required");
                this.cmsEnabled = builder.cmsEnabled;
                this.cpuPolicy = builder.cpuPolicy;
                this.labels = builder.labels;
                this.nodeNameMode = builder.nodeNameMode;
                this.taints = builder.taints;
                this.unschedulable = builder.unschedulable;
                this.userData = builder.userData;
            }

            @Override
            public final java.lang.Object getRuntime() {
                return this.runtime;
            }

            @Override
            public final java.lang.Object getRuntimeVersion() {
                return this.runtimeVersion;
            }

            @Override
            public final java.lang.Object getCmsEnabled() {
                return this.cmsEnabled;
            }

            @Override
            public final java.lang.Object getCpuPolicy() {
                return this.cpuPolicy;
            }

            @Override
            public final java.lang.Object getLabels() {
                return this.labels;
            }

            @Override
            public final java.lang.Object getNodeNameMode() {
                return this.nodeNameMode;
            }

            @Override
            public final java.lang.Object getTaints() {
                return this.taints;
            }

            @Override
            public final java.lang.Object getUnschedulable() {
                return this.unschedulable;
            }

            @Override
            public final java.lang.Object getUserData() {
                return this.userData;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("runtime", om.valueToTree(this.getRuntime()));
                data.set("runtimeVersion", om.valueToTree(this.getRuntimeVersion()));
                if (this.getCmsEnabled() != null) {
                    data.set("cmsEnabled", om.valueToTree(this.getCmsEnabled()));
                }
                if (this.getCpuPolicy() != null) {
                    data.set("cpuPolicy", om.valueToTree(this.getCpuPolicy()));
                }
                if (this.getLabels() != null) {
                    data.set("labels", om.valueToTree(this.getLabels()));
                }
                if (this.getNodeNameMode() != null) {
                    data.set("nodeNameMode", om.valueToTree(this.getNodeNameMode()));
                }
                if (this.getTaints() != null) {
                    data.set("taints", om.valueToTree(this.getTaints()));
                }
                if (this.getUnschedulable() != null) {
                    data.set("unschedulable", om.valueToTree(this.getUnschedulable()));
                }
                if (this.getUserData() != null) {
                    data.set("userData", om.valueToTree(this.getUserData()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                KubernetesConfigProperty.Jsii$Proxy that = (KubernetesConfigProperty.Jsii$Proxy) o;

                if (!runtime.equals(that.runtime)) return false;
                if (!runtimeVersion.equals(that.runtimeVersion)) return false;
                if (this.cmsEnabled != null ? !this.cmsEnabled.equals(that.cmsEnabled) : that.cmsEnabled != null) return false;
                if (this.cpuPolicy != null ? !this.cpuPolicy.equals(that.cpuPolicy) : that.cpuPolicy != null) return false;
                if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
                if (this.nodeNameMode != null ? !this.nodeNameMode.equals(that.nodeNameMode) : that.nodeNameMode != null) return false;
                if (this.taints != null ? !this.taints.equals(that.taints) : that.taints != null) return false;
                if (this.unschedulable != null ? !this.unschedulable.equals(that.unschedulable) : that.unschedulable != null) return false;
                return this.userData != null ? this.userData.equals(that.userData) : that.userData == null;
            }

            @Override
            public final int hashCode() {
                int result = this.runtime.hashCode();
                result = 31 * result + (this.runtimeVersion.hashCode());
                result = 31 * result + (this.cmsEnabled != null ? this.cmsEnabled.hashCode() : 0);
                result = 31 * result + (this.cpuPolicy != null ? this.cpuPolicy.hashCode() : 0);
                result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
                result = 31 * result + (this.nodeNameMode != null ? this.nodeNameMode.hashCode() : 0);
                result = 31 * result + (this.taints != null ? this.taints.hashCode() : 0);
                result = 31 * result + (this.unschedulable != null ? this.unschedulable.hashCode() : 0);
                result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty")
    @software.amazon.jsii.Jsii.Proxy(LabelsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LabelsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LabelsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LabelsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LabelsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LabelsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LabelsProperty.Jsii$Proxy that = (LabelsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagementProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagementProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRepair() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUpgradeConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagementProperty> {
            java.lang.Object enable;
            java.lang.Object autoRepair;
            java.lang.Object upgradeConfig;

            /**
             * Sets the value of {@link ManagementProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link ManagementProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link ManagementProperty#getAutoRepair}
             * @param autoRepair the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRepair(java.lang.Boolean autoRepair) {
                this.autoRepair = autoRepair;
                return this;
            }

            /**
             * Sets the value of {@link ManagementProperty#getAutoRepair}
             * @param autoRepair the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRepair(com.aliyun.ros.cdk.core.IResolvable autoRepair) {
                this.autoRepair = autoRepair;
                return this;
            }

            /**
             * Sets the value of {@link ManagementProperty#getUpgradeConfig}
             * @param upgradeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder upgradeConfig(com.aliyun.ros.cdk.core.IResolvable upgradeConfig) {
                this.upgradeConfig = upgradeConfig;
                return this;
            }

            /**
             * Sets the value of {@link ManagementProperty#getUpgradeConfig}
             * @param upgradeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder upgradeConfig(com.aliyun.ros.cdk.cs.RosClusterNodePool.UpgradeConfigProperty upgradeConfig) {
                this.upgradeConfig = upgradeConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagementProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagementProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagementProperty {
            private final java.lang.Object enable;
            private final java.lang.Object autoRepair;
            private final java.lang.Object upgradeConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRepair = software.amazon.jsii.Kernel.get(this, "autoRepair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.upgradeConfig = software.amazon.jsii.Kernel.get(this, "upgradeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
                this.autoRepair = builder.autoRepair;
                this.upgradeConfig = builder.upgradeConfig;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getAutoRepair() {
                return this.autoRepair;
            }

            @Override
            public final java.lang.Object getUpgradeConfig() {
                return this.upgradeConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enable", om.valueToTree(this.getEnable()));
                if (this.getAutoRepair() != null) {
                    data.set("autoRepair", om.valueToTree(this.getAutoRepair()));
                }
                if (this.getUpgradeConfig() != null) {
                    data.set("upgradeConfig", om.valueToTree(this.getUpgradeConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagementProperty.Jsii$Proxy that = (ManagementProperty.Jsii$Proxy) o;

                if (!enable.equals(that.enable)) return false;
                if (this.autoRepair != null ? !this.autoRepair.equals(that.autoRepair) : that.autoRepair != null) return false;
                return this.upgradeConfig != null ? this.upgradeConfig.equals(that.upgradeConfig) : that.upgradeConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable.hashCode();
                result = 31 * result + (this.autoRepair != null ? this.autoRepair.hashCode() : 0);
                result = 31 * result + (this.upgradeConfig != null ? this.upgradeConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(NodePoolInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NodePoolInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NodePoolInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NodePoolInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NodePoolInfoProperty> {
            java.lang.Object name;
            java.lang.Object resourceGroupId;

            /**
             * Sets the value of {@link NodePoolInfoProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(java.lang.String resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NodePoolInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NodePoolInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NodePoolInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodePoolInfoProperty {
            private final java.lang.Object name;
            private final java.lang.Object resourceGroupId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.resourceGroupId = builder.resourceGroupId;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getResourceGroupId() {
                return this.resourceGroupId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getResourceGroupId() != null) {
                    data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NodePoolInfoProperty.Jsii$Proxy that = (NodePoolInfoProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty")
    @software.amazon.jsii.Jsii.Proxy(ScalingGroupProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScalingGroupProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceTypes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSystemDiskSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCompensateWithOnDemand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDisks() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAzPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnDemandBaseCapacity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnDemandPercentageAboveBaseCapacity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsInstances() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScalingPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstancePools() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstanceRemedy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty> getTags() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScalingGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScalingGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScalingGroupProperty> {
            java.lang.Object instanceTypes;
            java.lang.Object systemDiskSize;
            java.lang.Object vSwitchIds;
            java.lang.Object autoRenew;
            java.lang.Object autoRenewPeriod;
            java.lang.Object compensateWithOnDemand;
            java.lang.Object dataDisks;
            java.lang.Object imageId;
            java.lang.Object instanceChargeType;
            java.lang.Object internetChargeType;
            java.lang.Object internetMaxBandwidthOut;
            java.lang.Object keyPair;
            java.lang.Object loginPassword;
            java.lang.Object multiAzPolicy;
            java.lang.Object onDemandBaseCapacity;
            java.lang.Object onDemandPercentageAboveBaseCapacity;
            java.lang.Object period;
            java.lang.Object periodUnit;
            java.lang.Object platform;
            java.lang.Object rdsInstances;
            java.lang.Object scalingPolicy;
            java.lang.Object securityGroupId;
            java.lang.Object spotInstancePools;
            java.lang.Object spotInstanceRemedy;
            java.lang.Object spotPriceLimit;
            java.lang.Object spotStrategy;
            java.lang.Object systemDiskCategory;
            java.lang.Object systemDiskPerformanceLevel;
            java.util.List<com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty> tags;

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceTypes}
             * @param instanceTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceTypes}
             * @param instanceTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(java.lang.Number systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getCompensateWithOnDemand}
             * @param compensateWithOnDemand the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compensateWithOnDemand(java.lang.Boolean compensateWithOnDemand) {
                this.compensateWithOnDemand = compensateWithOnDemand;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getCompensateWithOnDemand}
             * @param compensateWithOnDemand the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compensateWithOnDemand(com.aliyun.ros.cdk.core.IResolvable compensateWithOnDemand) {
                this.compensateWithOnDemand = compensateWithOnDemand;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(java.lang.String instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(java.lang.String internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getKeyPair}
             * @param keyPair the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPair(java.lang.String keyPair) {
                this.keyPair = keyPair;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getKeyPair}
             * @param keyPair the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
                this.keyPair = keyPair;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getLoginPassword}
             * @param loginPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loginPassword(java.lang.String loginPassword) {
                this.loginPassword = loginPassword;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getLoginPassword}
             * @param loginPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
                this.loginPassword = loginPassword;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getMultiAzPolicy}
             * @param multiAzPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder multiAzPolicy(java.lang.String multiAzPolicy) {
                this.multiAzPolicy = multiAzPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getMultiAzPolicy}
             * @param multiAzPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder multiAzPolicy(com.aliyun.ros.cdk.core.IResolvable multiAzPolicy) {
                this.multiAzPolicy = multiAzPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getOnDemandBaseCapacity}
             * @param onDemandBaseCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandBaseCapacity(java.lang.Number onDemandBaseCapacity) {
                this.onDemandBaseCapacity = onDemandBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getOnDemandBaseCapacity}
             * @param onDemandBaseCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandBaseCapacity(com.aliyun.ros.cdk.core.IResolvable onDemandBaseCapacity) {
                this.onDemandBaseCapacity = onDemandBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getOnDemandPercentageAboveBaseCapacity}
             * @param onDemandPercentageAboveBaseCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandPercentageAboveBaseCapacity(java.lang.Number onDemandPercentageAboveBaseCapacity) {
                this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getOnDemandPercentageAboveBaseCapacity}
             * @param onDemandPercentageAboveBaseCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandPercentageAboveBaseCapacity(com.aliyun.ros.cdk.core.IResolvable onDemandPercentageAboveBaseCapacity) {
                this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(java.lang.String periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPlatform}
             * @param platform the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder platform(java.lang.String platform) {
                this.platform = platform;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPlatform}
             * @param platform the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
                this.platform = platform;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getRdsInstances}
             * @param rdsInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsInstances(com.aliyun.ros.cdk.core.IResolvable rdsInstances) {
                this.rdsInstances = rdsInstances;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getRdsInstances}
             * @param rdsInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsInstances(java.util.List<? extends java.lang.Object> rdsInstances) {
                this.rdsInstances = rdsInstances;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getScalingPolicy}
             * @param scalingPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scalingPolicy(java.lang.String scalingPolicy) {
                this.scalingPolicy = scalingPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getScalingPolicy}
             * @param scalingPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scalingPolicy(com.aliyun.ros.cdk.core.IResolvable scalingPolicy) {
                this.scalingPolicy = scalingPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotInstancePools}
             * @param spotInstancePools the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstancePools(java.lang.Number spotInstancePools) {
                this.spotInstancePools = spotInstancePools;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotInstancePools}
             * @param spotInstancePools the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstancePools(com.aliyun.ros.cdk.core.IResolvable spotInstancePools) {
                this.spotInstancePools = spotInstancePools;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotInstanceRemedy}
             * @param spotInstanceRemedy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstanceRemedy(java.lang.Boolean spotInstanceRemedy) {
                this.spotInstanceRemedy = spotInstanceRemedy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotInstanceRemedy}
             * @param spotInstanceRemedy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstanceRemedy(com.aliyun.ros.cdk.core.IResolvable spotInstanceRemedy) {
                this.spotInstanceRemedy = spotInstanceRemedy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(java.util.List<? extends java.lang.Object> spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @SuppressWarnings("unchecked")
            public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty> tags) {
                this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty>)tags;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScalingGroupProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScalingGroupProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScalingGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingGroupProperty {
            private final java.lang.Object instanceTypes;
            private final java.lang.Object systemDiskSize;
            private final java.lang.Object vSwitchIds;
            private final java.lang.Object autoRenew;
            private final java.lang.Object autoRenewPeriod;
            private final java.lang.Object compensateWithOnDemand;
            private final java.lang.Object dataDisks;
            private final java.lang.Object imageId;
            private final java.lang.Object instanceChargeType;
            private final java.lang.Object internetChargeType;
            private final java.lang.Object internetMaxBandwidthOut;
            private final java.lang.Object keyPair;
            private final java.lang.Object loginPassword;
            private final java.lang.Object multiAzPolicy;
            private final java.lang.Object onDemandBaseCapacity;
            private final java.lang.Object onDemandPercentageAboveBaseCapacity;
            private final java.lang.Object period;
            private final java.lang.Object periodUnit;
            private final java.lang.Object platform;
            private final java.lang.Object rdsInstances;
            private final java.lang.Object scalingPolicy;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object spotInstancePools;
            private final java.lang.Object spotInstanceRemedy;
            private final java.lang.Object spotPriceLimit;
            private final java.lang.Object spotStrategy;
            private final java.lang.Object systemDiskCategory;
            private final java.lang.Object systemDiskPerformanceLevel;
            private final java.util.List<com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty> tags;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.compensateWithOnDemand = software.amazon.jsii.Kernel.get(this, "compensateWithOnDemand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.multiAzPolicy = software.amazon.jsii.Kernel.get(this, "multiAzPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onDemandBaseCapacity = software.amazon.jsii.Kernel.get(this, "onDemandBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onDemandPercentageAboveBaseCapacity = software.amazon.jsii.Kernel.get(this, "onDemandPercentageAboveBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsInstances = software.amazon.jsii.Kernel.get(this, "rdsInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scalingPolicy = software.amazon.jsii.Kernel.get(this, "scalingPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotInstancePools = software.amazon.jsii.Kernel.get(this, "spotInstancePools", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotInstanceRemedy = software.amazon.jsii.Kernel.get(this, "spotInstanceRemedy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty.class)));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            @SuppressWarnings("unchecked")
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceTypes = java.util.Objects.requireNonNull(builder.instanceTypes, "instanceTypes is required");
                this.systemDiskSize = java.util.Objects.requireNonNull(builder.systemDiskSize, "systemDiskSize is required");
                this.vSwitchIds = java.util.Objects.requireNonNull(builder.vSwitchIds, "vSwitchIds is required");
                this.autoRenew = builder.autoRenew;
                this.autoRenewPeriod = builder.autoRenewPeriod;
                this.compensateWithOnDemand = builder.compensateWithOnDemand;
                this.dataDisks = builder.dataDisks;
                this.imageId = builder.imageId;
                this.instanceChargeType = builder.instanceChargeType;
                this.internetChargeType = builder.internetChargeType;
                this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
                this.keyPair = builder.keyPair;
                this.loginPassword = builder.loginPassword;
                this.multiAzPolicy = builder.multiAzPolicy;
                this.onDemandBaseCapacity = builder.onDemandBaseCapacity;
                this.onDemandPercentageAboveBaseCapacity = builder.onDemandPercentageAboveBaseCapacity;
                this.period = builder.period;
                this.periodUnit = builder.periodUnit;
                this.platform = builder.platform;
                this.rdsInstances = builder.rdsInstances;
                this.scalingPolicy = builder.scalingPolicy;
                this.securityGroupId = builder.securityGroupId;
                this.spotInstancePools = builder.spotInstancePools;
                this.spotInstanceRemedy = builder.spotInstanceRemedy;
                this.spotPriceLimit = builder.spotPriceLimit;
                this.spotStrategy = builder.spotStrategy;
                this.systemDiskCategory = builder.systemDiskCategory;
                this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
                this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty>)builder.tags;
            }

            @Override
            public final java.lang.Object getInstanceTypes() {
                return this.instanceTypes;
            }

            @Override
            public final java.lang.Object getSystemDiskSize() {
                return this.systemDiskSize;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            public final java.lang.Object getAutoRenew() {
                return this.autoRenew;
            }

            @Override
            public final java.lang.Object getAutoRenewPeriod() {
                return this.autoRenewPeriod;
            }

            @Override
            public final java.lang.Object getCompensateWithOnDemand() {
                return this.compensateWithOnDemand;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getInstanceChargeType() {
                return this.instanceChargeType;
            }

            @Override
            public final java.lang.Object getInternetChargeType() {
                return this.internetChargeType;
            }

            @Override
            public final java.lang.Object getInternetMaxBandwidthOut() {
                return this.internetMaxBandwidthOut;
            }

            @Override
            public final java.lang.Object getKeyPair() {
                return this.keyPair;
            }

            @Override
            public final java.lang.Object getLoginPassword() {
                return this.loginPassword;
            }

            @Override
            public final java.lang.Object getMultiAzPolicy() {
                return this.multiAzPolicy;
            }

            @Override
            public final java.lang.Object getOnDemandBaseCapacity() {
                return this.onDemandBaseCapacity;
            }

            @Override
            public final java.lang.Object getOnDemandPercentageAboveBaseCapacity() {
                return this.onDemandPercentageAboveBaseCapacity;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getPeriodUnit() {
                return this.periodUnit;
            }

            @Override
            public final java.lang.Object getPlatform() {
                return this.platform;
            }

            @Override
            public final java.lang.Object getRdsInstances() {
                return this.rdsInstances;
            }

            @Override
            public final java.lang.Object getScalingPolicy() {
                return this.scalingPolicy;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getSpotInstancePools() {
                return this.spotInstancePools;
            }

            @Override
            public final java.lang.Object getSpotInstanceRemedy() {
                return this.spotInstanceRemedy;
            }

            @Override
            public final java.lang.Object getSpotPriceLimit() {
                return this.spotPriceLimit;
            }

            @Override
            public final java.lang.Object getSpotStrategy() {
                return this.spotStrategy;
            }

            @Override
            public final java.lang.Object getSystemDiskCategory() {
                return this.systemDiskCategory;
            }

            @Override
            public final java.lang.Object getSystemDiskPerformanceLevel() {
                return this.systemDiskPerformanceLevel;
            }

            @Override
            public final java.util.List<com.aliyun.ros.cdk.cs.RosClusterNodePool.TagsProperty> getTags() {
                return this.tags;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                if (this.getAutoRenew() != null) {
                    data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
                }
                if (this.getAutoRenewPeriod() != null) {
                    data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
                }
                if (this.getCompensateWithOnDemand() != null) {
                    data.set("compensateWithOnDemand", om.valueToTree(this.getCompensateWithOnDemand()));
                }
                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getImageId() != null) {
                    data.set("imageId", om.valueToTree(this.getImageId()));
                }
                if (this.getInstanceChargeType() != null) {
                    data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
                }
                if (this.getInternetChargeType() != null) {
                    data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
                }
                if (this.getInternetMaxBandwidthOut() != null) {
                    data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
                }
                if (this.getKeyPair() != null) {
                    data.set("keyPair", om.valueToTree(this.getKeyPair()));
                }
                if (this.getLoginPassword() != null) {
                    data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
                }
                if (this.getMultiAzPolicy() != null) {
                    data.set("multiAzPolicy", om.valueToTree(this.getMultiAzPolicy()));
                }
                if (this.getOnDemandBaseCapacity() != null) {
                    data.set("onDemandBaseCapacity", om.valueToTree(this.getOnDemandBaseCapacity()));
                }
                if (this.getOnDemandPercentageAboveBaseCapacity() != null) {
                    data.set("onDemandPercentageAboveBaseCapacity", om.valueToTree(this.getOnDemandPercentageAboveBaseCapacity()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getPeriodUnit() != null) {
                    data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
                }
                if (this.getPlatform() != null) {
                    data.set("platform", om.valueToTree(this.getPlatform()));
                }
                if (this.getRdsInstances() != null) {
                    data.set("rdsInstances", om.valueToTree(this.getRdsInstances()));
                }
                if (this.getScalingPolicy() != null) {
                    data.set("scalingPolicy", om.valueToTree(this.getScalingPolicy()));
                }
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getSpotInstancePools() != null) {
                    data.set("spotInstancePools", om.valueToTree(this.getSpotInstancePools()));
                }
                if (this.getSpotInstanceRemedy() != null) {
                    data.set("spotInstanceRemedy", om.valueToTree(this.getSpotInstanceRemedy()));
                }
                if (this.getSpotPriceLimit() != null) {
                    data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }
                if (this.getSystemDiskCategory() != null) {
                    data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
                }
                if (this.getSystemDiskPerformanceLevel() != null) {
                    data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScalingGroupProperty.Jsii$Proxy that = (ScalingGroupProperty.Jsii$Proxy) o;

                if (!instanceTypes.equals(that.instanceTypes)) return false;
                if (!systemDiskSize.equals(that.systemDiskSize)) return false;
                if (!vSwitchIds.equals(that.vSwitchIds)) return false;
                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
                if (this.compensateWithOnDemand != null ? !this.compensateWithOnDemand.equals(that.compensateWithOnDemand) : that.compensateWithOnDemand != null) return false;
                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
                if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
                if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
                if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
                if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
                if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
                if (this.multiAzPolicy != null ? !this.multiAzPolicy.equals(that.multiAzPolicy) : that.multiAzPolicy != null) return false;
                if (this.onDemandBaseCapacity != null ? !this.onDemandBaseCapacity.equals(that.onDemandBaseCapacity) : that.onDemandBaseCapacity != null) return false;
                if (this.onDemandPercentageAboveBaseCapacity != null ? !this.onDemandPercentageAboveBaseCapacity.equals(that.onDemandPercentageAboveBaseCapacity) : that.onDemandPercentageAboveBaseCapacity != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
                if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
                if (this.rdsInstances != null ? !this.rdsInstances.equals(that.rdsInstances) : that.rdsInstances != null) return false;
                if (this.scalingPolicy != null ? !this.scalingPolicy.equals(that.scalingPolicy) : that.scalingPolicy != null) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.spotInstancePools != null ? !this.spotInstancePools.equals(that.spotInstancePools) : that.spotInstancePools != null) return false;
                if (this.spotInstanceRemedy != null ? !this.spotInstanceRemedy.equals(that.spotInstanceRemedy) : that.spotInstanceRemedy != null) return false;
                if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
                if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
                if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
                if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
                return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceTypes.hashCode();
                result = 31 * result + (this.systemDiskSize.hashCode());
                result = 31 * result + (this.vSwitchIds.hashCode());
                result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
                result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
                result = 31 * result + (this.compensateWithOnDemand != null ? this.compensateWithOnDemand.hashCode() : 0);
                result = 31 * result + (this.dataDisks != null ? this.dataDisks.hashCode() : 0);
                result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
                result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
                result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
                result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
                result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
                result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
                result = 31 * result + (this.multiAzPolicy != null ? this.multiAzPolicy.hashCode() : 0);
                result = 31 * result + (this.onDemandBaseCapacity != null ? this.onDemandBaseCapacity.hashCode() : 0);
                result = 31 * result + (this.onDemandPercentageAboveBaseCapacity != null ? this.onDemandPercentageAboveBaseCapacity.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
                result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
                result = 31 * result + (this.rdsInstances != null ? this.rdsInstances.hashCode() : 0);
                result = 31 * result + (this.scalingPolicy != null ? this.scalingPolicy.hashCode() : 0);
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.spotInstancePools != null ? this.spotInstancePools.hashCode() : 0);
                result = 31 * result + (this.spotInstanceRemedy != null ? this.spotInstanceRemedy.hashCode() : 0);
                result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
                result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty")
    @software.amazon.jsii.Jsii.Proxy(SpotPriceLimitProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SpotPriceLimitProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPriceLimit();

        /**
         * @return a {@link Builder} of {@link SpotPriceLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SpotPriceLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SpotPriceLimitProperty> {
            java.lang.Object instanceType;
            java.lang.Object priceLimit;

            /**
             * Sets the value of {@link SpotPriceLimitProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SpotPriceLimitProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SpotPriceLimitProperty#getPriceLimit}
             * @param priceLimit the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priceLimit(java.lang.Number priceLimit) {
                this.priceLimit = priceLimit;
                return this;
            }

            /**
             * Sets the value of {@link SpotPriceLimitProperty#getPriceLimit}
             * @param priceLimit the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priceLimit(com.aliyun.ros.cdk.core.IResolvable priceLimit) {
                this.priceLimit = priceLimit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SpotPriceLimitProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SpotPriceLimitProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SpotPriceLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SpotPriceLimitProperty {
            private final java.lang.Object instanceType;
            private final java.lang.Object priceLimit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priceLimit = software.amazon.jsii.Kernel.get(this, "priceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.priceLimit = java.util.Objects.requireNonNull(builder.priceLimit, "priceLimit is required");
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getPriceLimit() {
                return this.priceLimit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                data.set("priceLimit", om.valueToTree(this.getPriceLimit()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SpotPriceLimitProperty.Jsii$Proxy that = (SpotPriceLimitProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                return this.priceLimit.equals(that.priceLimit);
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.priceLimit.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty")
    @software.amazon.jsii.Jsii.Proxy(TaintsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TaintsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEffect();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link TaintsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TaintsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TaintsProperty> {
            java.lang.Object effect;
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TaintsProperty#getEffect}
             * @param effect the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(java.lang.String effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getEffect}
             * @param effect the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(com.aliyun.ros.cdk.core.IResolvable effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TaintsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TaintsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TaintsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TaintsProperty {
            private final java.lang.Object effect;
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.effect = software.amazon.jsii.Kernel.get(this, "effect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.effect = java.util.Objects.requireNonNull(builder.effect, "effect is required");
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getEffect() {
                return this.effect;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("effect", om.valueToTree(this.getEffect()));
                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TaintsProperty.Jsii$Proxy that = (TaintsProperty.Jsii$Proxy) o;

                if (!effect.equals(that.effect)) return false;
                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.effect.hashCode();
                result = 31 * result + (this.key.hashCode());
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TeeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TeeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTeeEnable();

        /**
         * @return a {@link Builder} of {@link TeeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TeeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TeeConfigProperty> {
            java.lang.Object teeEnable;

            /**
             * Sets the value of {@link TeeConfigProperty#getTeeEnable}
             * @param teeEnable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder teeEnable(java.lang.Boolean teeEnable) {
                this.teeEnable = teeEnable;
                return this;
            }

            /**
             * Sets the value of {@link TeeConfigProperty#getTeeEnable}
             * @param teeEnable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder teeEnable(com.aliyun.ros.cdk.core.IResolvable teeEnable) {
                this.teeEnable = teeEnable;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TeeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TeeConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TeeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TeeConfigProperty {
            private final java.lang.Object teeEnable;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.teeEnable = software.amazon.jsii.Kernel.get(this, "teeEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.teeEnable = java.util.Objects.requireNonNull(builder.teeEnable, "teeEnable is required");
            }

            @Override
            public final java.lang.Object getTeeEnable() {
                return this.teeEnable;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("teeEnable", om.valueToTree(this.getTeeEnable()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TeeConfigProperty.Jsii$Proxy that = (TeeConfigProperty.Jsii$Proxy) o;

                return this.teeEnable.equals(that.teeEnable);
            }

            @Override
            public final int hashCode() {
                int result = this.teeEnable.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(UpgradeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface UpgradeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUpgrade() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxUnavailable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSurge() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSurgePercentage() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link UpgradeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link UpgradeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<UpgradeConfigProperty> {
            java.lang.Object autoUpgrade;
            java.lang.Object maxUnavailable;
            java.lang.Object surge;
            java.lang.Object surgePercentage;

            /**
             * Sets the value of {@link UpgradeConfigProperty#getAutoUpgrade}
             * @param autoUpgrade the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoUpgrade(java.lang.Boolean autoUpgrade) {
                this.autoUpgrade = autoUpgrade;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getAutoUpgrade}
             * @param autoUpgrade the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoUpgrade(com.aliyun.ros.cdk.core.IResolvable autoUpgrade) {
                this.autoUpgrade = autoUpgrade;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getMaxUnavailable}
             * @param maxUnavailable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxUnavailable(java.lang.Number maxUnavailable) {
                this.maxUnavailable = maxUnavailable;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getMaxUnavailable}
             * @param maxUnavailable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxUnavailable(com.aliyun.ros.cdk.core.IResolvable maxUnavailable) {
                this.maxUnavailable = maxUnavailable;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getSurge}
             * @param surge the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder surge(java.lang.Number surge) {
                this.surge = surge;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getSurge}
             * @param surge the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder surge(com.aliyun.ros.cdk.core.IResolvable surge) {
                this.surge = surge;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getSurgePercentage}
             * @param surgePercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder surgePercentage(java.lang.Number surgePercentage) {
                this.surgePercentage = surgePercentage;
                return this;
            }

            /**
             * Sets the value of {@link UpgradeConfigProperty#getSurgePercentage}
             * @param surgePercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder surgePercentage(com.aliyun.ros.cdk.core.IResolvable surgePercentage) {
                this.surgePercentage = surgePercentage;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link UpgradeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public UpgradeConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link UpgradeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UpgradeConfigProperty {
            private final java.lang.Object autoUpgrade;
            private final java.lang.Object maxUnavailable;
            private final java.lang.Object surge;
            private final java.lang.Object surgePercentage;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoUpgrade = software.amazon.jsii.Kernel.get(this, "autoUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxUnavailable = software.amazon.jsii.Kernel.get(this, "maxUnavailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.surge = software.amazon.jsii.Kernel.get(this, "surge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.surgePercentage = software.amazon.jsii.Kernel.get(this, "surgePercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoUpgrade = builder.autoUpgrade;
                this.maxUnavailable = builder.maxUnavailable;
                this.surge = builder.surge;
                this.surgePercentage = builder.surgePercentage;
            }

            @Override
            public final java.lang.Object getAutoUpgrade() {
                return this.autoUpgrade;
            }

            @Override
            public final java.lang.Object getMaxUnavailable() {
                return this.maxUnavailable;
            }

            @Override
            public final java.lang.Object getSurge() {
                return this.surge;
            }

            @Override
            public final java.lang.Object getSurgePercentage() {
                return this.surgePercentage;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoUpgrade() != null) {
                    data.set("autoUpgrade", om.valueToTree(this.getAutoUpgrade()));
                }
                if (this.getMaxUnavailable() != null) {
                    data.set("maxUnavailable", om.valueToTree(this.getMaxUnavailable()));
                }
                if (this.getSurge() != null) {
                    data.set("surge", om.valueToTree(this.getSurge()));
                }
                if (this.getSurgePercentage() != null) {
                    data.set("surgePercentage", om.valueToTree(this.getSurgePercentage()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                UpgradeConfigProperty.Jsii$Proxy that = (UpgradeConfigProperty.Jsii$Proxy) o;

                if (this.autoUpgrade != null ? !this.autoUpgrade.equals(that.autoUpgrade) : that.autoUpgrade != null) return false;
                if (this.maxUnavailable != null ? !this.maxUnavailable.equals(that.maxUnavailable) : that.maxUnavailable != null) return false;
                if (this.surge != null ? !this.surge.equals(that.surge) : that.surge != null) return false;
                return this.surgePercentage != null ? this.surgePercentage.equals(that.surgePercentage) : that.surgePercentage == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoUpgrade != null ? this.autoUpgrade.hashCode() : 0;
                result = 31 * result + (this.maxUnavailable != null ? this.maxUnavailable.hashCode() : 0);
                result = 31 * result + (this.surge != null ? this.surge.hashCode() : 0);
                result = 31 * result + (this.surgePercentage != null ? this.surgePercentage.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.RosClusterNodePool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.RosClusterNodePool> {
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
        private final com.aliyun.ros.cdk.cs.RosClusterNodePoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.RosClusterNodePoolProps.Builder();
        }

        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroup This parameter is required.
         */
        public Builder scalingGroup(final com.aliyun.ros.cdk.core.IResolvable scalingGroup) {
            this.props.scalingGroup(scalingGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroup This parameter is required.
         */
        public Builder scalingGroup(final com.aliyun.ros.cdk.cs.RosClusterNodePool.ScalingGroupProperty scalingGroup) {
            this.props.scalingGroup(scalingGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoScaling This parameter is required.
         */
        public Builder autoScaling(final com.aliyun.ros.cdk.core.IResolvable autoScaling) {
            this.props.autoScaling(autoScaling);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoScaling This parameter is required.
         */
        public Builder autoScaling(final com.aliyun.ros.cdk.cs.RosClusterNodePool.AutoScalingProperty autoScaling) {
            this.props.autoScaling(autoScaling);
            return this;
        }

        /**
         * @return {@code this}
         * @param count This parameter is required.
         */
        public Builder count(final java.lang.Number count) {
            this.props.count(count);
            return this;
        }
        /**
         * @return {@code this}
         * @param count This parameter is required.
         */
        public Builder count(final com.aliyun.ros.cdk.core.IResolvable count) {
            this.props.count(count);
            return this;
        }

        /**
         * @return {@code this}
         * @param kubernetesConfig This parameter is required.
         */
        public Builder kubernetesConfig(final com.aliyun.ros.cdk.core.IResolvable kubernetesConfig) {
            this.props.kubernetesConfig(kubernetesConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param kubernetesConfig This parameter is required.
         */
        public Builder kubernetesConfig(final com.aliyun.ros.cdk.cs.RosClusterNodePool.KubernetesConfigProperty kubernetesConfig) {
            this.props.kubernetesConfig(kubernetesConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param management This parameter is required.
         */
        public Builder management(final com.aliyun.ros.cdk.core.IResolvable management) {
            this.props.management(management);
            return this;
        }
        /**
         * @return {@code this}
         * @param management This parameter is required.
         */
        public Builder management(final com.aliyun.ros.cdk.cs.RosClusterNodePool.ManagementProperty management) {
            this.props.management(management);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodePoolInfo This parameter is required.
         */
        public Builder nodePoolInfo(final com.aliyun.ros.cdk.core.IResolvable nodePoolInfo) {
            this.props.nodePoolInfo(nodePoolInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodePoolInfo This parameter is required.
         */
        public Builder nodePoolInfo(final com.aliyun.ros.cdk.cs.RosClusterNodePool.NodePoolInfoProperty nodePoolInfo) {
            this.props.nodePoolInfo(nodePoolInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param teeConfig This parameter is required.
         */
        public Builder teeConfig(final com.aliyun.ros.cdk.core.IResolvable teeConfig) {
            this.props.teeConfig(teeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param teeConfig This parameter is required.
         */
        public Builder teeConfig(final com.aliyun.ros.cdk.cs.RosClusterNodePool.TeeConfigProperty teeConfig) {
            this.props.teeConfig(teeConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cs.RosClusterNodePool}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.RosClusterNodePool build() {
            return new com.aliyun.ros.cdk.cs.RosClusterNodePool(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
