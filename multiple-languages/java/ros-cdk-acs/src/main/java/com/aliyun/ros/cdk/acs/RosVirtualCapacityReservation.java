package com.aliyun.ros.cdk.acs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ACS::VirtualCapacityReservation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.388Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.RosVirtualCapacityReservation")
public class RosVirtualCapacityReservation extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVirtualCapacityReservation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVirtualCapacityReservation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVirtualCapacityReservation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.RosVirtualCapacityReservationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPodPostpaidSpec() {
        return software.amazon.jsii.Kernel.get(this, "podPostpaidSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPodPostpaidSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "podPostpaidSpec", value);
    }

    /**
     */
    public void setPodPostpaidSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty value) {
        software.amazon.jsii.Kernel.set(this, "podPostpaidSpec", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.GpuQuantityConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(GpuQuantityConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GpuQuantityConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComputeQos() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuModel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuQuantity() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GpuQuantityConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GpuQuantityConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GpuQuantityConfigsProperty> {
            java.lang.Object arch;
            java.lang.Object computeQos;
            java.lang.Object gpuModel;
            java.lang.Object gpuQuantity;

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getArch}
             * @param arch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arch(java.lang.String arch) {
                this.arch = arch;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getArch}
             * @param arch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arch(com.aliyun.ros.cdk.core.IResolvable arch) {
                this.arch = arch;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getComputeQos}
             * @param computeQos the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder computeQos(java.lang.String computeQos) {
                this.computeQos = computeQos;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getComputeQos}
             * @param computeQos the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder computeQos(com.aliyun.ros.cdk.core.IResolvable computeQos) {
                this.computeQos = computeQos;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getGpuModel}
             * @param gpuModel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuModel(java.lang.String gpuModel) {
                this.gpuModel = gpuModel;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getGpuModel}
             * @param gpuModel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuModel(com.aliyun.ros.cdk.core.IResolvable gpuModel) {
                this.gpuModel = gpuModel;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getGpuQuantity}
             * @param gpuQuantity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuQuantity(java.lang.Number gpuQuantity) {
                this.gpuQuantity = gpuQuantity;
                return this;
            }

            /**
             * Sets the value of {@link GpuQuantityConfigsProperty#getGpuQuantity}
             * @param gpuQuantity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuQuantity(com.aliyun.ros.cdk.core.IResolvable gpuQuantity) {
                this.gpuQuantity = gpuQuantity;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GpuQuantityConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GpuQuantityConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GpuQuantityConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GpuQuantityConfigsProperty {
            private final java.lang.Object arch;
            private final java.lang.Object computeQos;
            private final java.lang.Object gpuModel;
            private final java.lang.Object gpuQuantity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.arch = software.amazon.jsii.Kernel.get(this, "arch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.computeQos = software.amazon.jsii.Kernel.get(this, "computeQos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpuModel = software.amazon.jsii.Kernel.get(this, "gpuModel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpuQuantity = software.amazon.jsii.Kernel.get(this, "gpuQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.arch = builder.arch;
                this.computeQos = builder.computeQos;
                this.gpuModel = builder.gpuModel;
                this.gpuQuantity = builder.gpuQuantity;
            }

            @Override
            public final java.lang.Object getArch() {
                return this.arch;
            }

            @Override
            public final java.lang.Object getComputeQos() {
                return this.computeQos;
            }

            @Override
            public final java.lang.Object getGpuModel() {
                return this.gpuModel;
            }

            @Override
            public final java.lang.Object getGpuQuantity() {
                return this.gpuQuantity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArch() != null) {
                    data.set("arch", om.valueToTree(this.getArch()));
                }
                if (this.getComputeQos() != null) {
                    data.set("computeQos", om.valueToTree(this.getComputeQos()));
                }
                if (this.getGpuModel() != null) {
                    data.set("gpuModel", om.valueToTree(this.getGpuModel()));
                }
                if (this.getGpuQuantity() != null) {
                    data.set("gpuQuantity", om.valueToTree(this.getGpuQuantity()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.GpuQuantityConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GpuQuantityConfigsProperty.Jsii$Proxy that = (GpuQuantityConfigsProperty.Jsii$Proxy) o;

                if (this.arch != null ? !this.arch.equals(that.arch) : that.arch != null) return false;
                if (this.computeQos != null ? !this.computeQos.equals(that.computeQos) : that.computeQos != null) return false;
                if (this.gpuModel != null ? !this.gpuModel.equals(that.gpuModel) : that.gpuModel != null) return false;
                return this.gpuQuantity != null ? this.gpuQuantity.equals(that.gpuQuantity) : that.gpuQuantity == null;
            }

            @Override
            public final int hashCode() {
                int result = this.arch != null ? this.arch.hashCode() : 0;
                result = 31 * result + (this.computeQos != null ? this.computeQos.hashCode() : 0);
                result = 31 * result + (this.gpuModel != null ? this.gpuModel.hashCode() : 0);
                result = 31 * result + (this.gpuQuantity != null ? this.gpuQuantity.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty")
    @software.amazon.jsii.Jsii.Proxy(PodPostpaidSpecProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PodPostpaidSpecProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpuCore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuQuantityConfigs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMemGib() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplicas() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PodPostpaidSpecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PodPostpaidSpecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PodPostpaidSpecProperty> {
            java.lang.Object cpuCore;
            java.lang.Object gpuQuantityConfigs;
            java.lang.Object memGib;
            java.lang.Object replicas;

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getCpuCore}
             * @param cpuCore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpuCore(java.lang.Number cpuCore) {
                this.cpuCore = cpuCore;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getCpuCore}
             * @param cpuCore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpuCore(com.aliyun.ros.cdk.core.IResolvable cpuCore) {
                this.cpuCore = cpuCore;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getGpuQuantityConfigs}
             * @param gpuQuantityConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuQuantityConfigs(com.aliyun.ros.cdk.core.IResolvable gpuQuantityConfigs) {
                this.gpuQuantityConfigs = gpuQuantityConfigs;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getGpuQuantityConfigs}
             * @param gpuQuantityConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuQuantityConfigs(com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation.GpuQuantityConfigsProperty gpuQuantityConfigs) {
                this.gpuQuantityConfigs = gpuQuantityConfigs;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getMemGib}
             * @param memGib the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memGib(java.lang.Number memGib) {
                this.memGib = memGib;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getMemGib}
             * @param memGib the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memGib(com.aliyun.ros.cdk.core.IResolvable memGib) {
                this.memGib = memGib;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getReplicas}
             * @param replicas the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicas(java.lang.Number replicas) {
                this.replicas = replicas;
                return this;
            }

            /**
             * Sets the value of {@link PodPostpaidSpecProperty#getReplicas}
             * @param replicas the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicas(com.aliyun.ros.cdk.core.IResolvable replicas) {
                this.replicas = replicas;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PodPostpaidSpecProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PodPostpaidSpecProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PodPostpaidSpecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PodPostpaidSpecProperty {
            private final java.lang.Object cpuCore;
            private final java.lang.Object gpuQuantityConfigs;
            private final java.lang.Object memGib;
            private final java.lang.Object replicas;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cpuCore = software.amazon.jsii.Kernel.get(this, "cpuCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpuQuantityConfigs = software.amazon.jsii.Kernel.get(this, "gpuQuantityConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.memGib = software.amazon.jsii.Kernel.get(this, "memGib", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replicas = software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cpuCore = builder.cpuCore;
                this.gpuQuantityConfigs = builder.gpuQuantityConfigs;
                this.memGib = builder.memGib;
                this.replicas = builder.replicas;
            }

            @Override
            public final java.lang.Object getCpuCore() {
                return this.cpuCore;
            }

            @Override
            public final java.lang.Object getGpuQuantityConfigs() {
                return this.gpuQuantityConfigs;
            }

            @Override
            public final java.lang.Object getMemGib() {
                return this.memGib;
            }

            @Override
            public final java.lang.Object getReplicas() {
                return this.replicas;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCpuCore() != null) {
                    data.set("cpuCore", om.valueToTree(this.getCpuCore()));
                }
                if (this.getGpuQuantityConfigs() != null) {
                    data.set("gpuQuantityConfigs", om.valueToTree(this.getGpuQuantityConfigs()));
                }
                if (this.getMemGib() != null) {
                    data.set("memGib", om.valueToTree(this.getMemGib()));
                }
                if (this.getReplicas() != null) {
                    data.set("replicas", om.valueToTree(this.getReplicas()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PodPostpaidSpecProperty.Jsii$Proxy that = (PodPostpaidSpecProperty.Jsii$Proxy) o;

                if (this.cpuCore != null ? !this.cpuCore.equals(that.cpuCore) : that.cpuCore != null) return false;
                if (this.gpuQuantityConfigs != null ? !this.gpuQuantityConfigs.equals(that.gpuQuantityConfigs) : that.gpuQuantityConfigs != null) return false;
                if (this.memGib != null ? !this.memGib.equals(that.memGib) : that.memGib != null) return false;
                return this.replicas != null ? this.replicas.equals(that.replicas) : that.replicas == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cpuCore != null ? this.cpuCore.hashCode() : 0;
                result = 31 * result + (this.gpuQuantityConfigs != null ? this.gpuQuantityConfigs.hashCode() : 0);
                result = 31 * result + (this.memGib != null ? this.memGib.hashCode() : 0);
                result = 31 * result + (this.replicas != null ? this.replicas.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.acs.RosVirtualCapacityReservationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.acs.RosVirtualCapacityReservationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param podPostpaidSpec This parameter is required.
         */
        public Builder podPostpaidSpec(final com.aliyun.ros.cdk.core.IResolvable podPostpaidSpec) {
            this.props.podPostpaidSpec(podPostpaidSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param podPostpaidSpec This parameter is required.
         */
        public Builder podPostpaidSpec(final com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty podPostpaidSpec) {
            this.props.podPostpaidSpec(podPostpaidSpec);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation}.
         */
        @Override
        public com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation build() {
            return new com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
