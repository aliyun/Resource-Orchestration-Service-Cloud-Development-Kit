package com.aliyun.ros.cdk.acs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ACS::ApplicationPod</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.011Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.RosApplicationPod")
public class RosApplicationPod extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplicationPod(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplicationPod(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.acs.RosApplicationPod.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplicationPod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.RosApplicationPodProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getComputeClass() {
        return software.amazon.jsii.Kernel.get(this, "computeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeClass(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "computeClass", java.util.Objects.requireNonNull(value, "computeClass is required"));
    }

    /**
     */
    public void setComputeClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeClass", java.util.Objects.requireNonNull(value, "computeClass is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getComputeQos() {
        return software.amazon.jsii.Kernel.get(this, "computeQos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeQos(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "computeQos", java.util.Objects.requireNonNull(value, "computeQos is required"));
    }

    /**
     */
    public void setComputeQos(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeQos", java.util.Objects.requireNonNull(value, "computeQos is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCpuCoreNumber() {
        return software.amazon.jsii.Kernel.get(this, "cpuCoreNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuCoreNumber(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cpuCoreNumber", java.util.Objects.requireNonNull(value, "cpuCoreNumber is required"));
    }

    /**
     */
    public void setCpuCoreNumber(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuCoreNumber", java.util.Objects.requireNonNull(value, "cpuCoreNumber is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getImage() {
        return software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "image", java.util.Objects.requireNonNull(value, "image is required"));
    }

    /**
     */
    public void setImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "image", java.util.Objects.requireNonNull(value, "image is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getKind() {
        return software.amazon.jsii.Kernel.get(this, "kind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKind(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kind", java.util.Objects.requireNonNull(value, "kind is required"));
    }

    /**
     */
    public void setKind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kind", java.util.Objects.requireNonNull(value, "kind is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", java.util.Objects.requireNonNull(value, "memory is required"));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memory", java.util.Objects.requireNonNull(value, "memory is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskConfig() {
        return software.amazon.jsii.Kernel.get(this, "diskConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskConfig", value);
    }

    /**
     */
    public void setDiskConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.acs.RosApplicationPod.DiskConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "diskConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuCoreNumber() {
        return software.amazon.jsii.Kernel.get(this, "gpuCoreNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuCoreNumber(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "gpuCoreNumber", value);
    }

    /**
     */
    public void setGpuCoreNumber(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuCoreNumber", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuModelSeries() {
        return software.amazon.jsii.Kernel.get(this, "gpuModelSeries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuModelSeries(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gpuModelSeries", value);
    }

    /**
     */
    public void setGpuModelSeries(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuModelSeries", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuType() {
        return software.amazon.jsii.Kernel.get(this, "gpuType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gpuType", value);
    }

    /**
     */
    public void setGpuType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReplicas() {
        return software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replicas", value);
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicas", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.RosApplicationPod.DiskConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(DiskConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DiskConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDiskCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DiskConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DiskConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DiskConfigProperty> {
            java.lang.Object diskCategory;
            java.lang.Object size;
            java.lang.Object performanceLevel;

            /**
             * Sets the value of {@link DiskConfigProperty#getDiskCategory}
             * @param diskCategory the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskCategory(java.lang.String diskCategory) {
                this.diskCategory = diskCategory;
                return this;
            }

            /**
             * Sets the value of {@link DiskConfigProperty#getDiskCategory}
             * @param diskCategory the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskCategory(com.aliyun.ros.cdk.core.IResolvable diskCategory) {
                this.diskCategory = diskCategory;
                return this;
            }

            /**
             * Sets the value of {@link DiskConfigProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DiskConfigProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DiskConfigProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DiskConfigProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DiskConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DiskConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DiskConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskConfigProperty {
            private final java.lang.Object diskCategory;
            private final java.lang.Object size;
            private final java.lang.Object performanceLevel;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.diskCategory = java.util.Objects.requireNonNull(builder.diskCategory, "diskCategory is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.performanceLevel = builder.performanceLevel;
            }

            @Override
            public final java.lang.Object getDiskCategory() {
                return this.diskCategory;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("diskCategory", om.valueToTree(this.getDiskCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acs.RosApplicationPod.DiskConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DiskConfigProperty.Jsii$Proxy that = (DiskConfigProperty.Jsii$Proxy) o;

                if (!diskCategory.equals(that.diskCategory)) return false;
                if (!size.equals(that.size)) return false;
                return this.performanceLevel != null ? this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel == null;
            }

            @Override
            public final int hashCode() {
                int result = this.diskCategory.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.acs.RosApplicationPod}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.acs.RosApplicationPod> {
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
        private final com.aliyun.ros.cdk.acs.RosApplicationPodProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.acs.RosApplicationPodProps.Builder();
        }

        /**
         * @return {@code this}
         * @param computeClass This parameter is required.
         */
        public Builder computeClass(final java.lang.String computeClass) {
            this.props.computeClass(computeClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeClass This parameter is required.
         */
        public Builder computeClass(final com.aliyun.ros.cdk.core.IResolvable computeClass) {
            this.props.computeClass(computeClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeQos This parameter is required.
         */
        public Builder computeQos(final java.lang.String computeQos) {
            this.props.computeQos(computeQos);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeQos This parameter is required.
         */
        public Builder computeQos(final com.aliyun.ros.cdk.core.IResolvable computeQos) {
            this.props.computeQos(computeQos);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpuCoreNumber This parameter is required.
         */
        public Builder cpuCoreNumber(final java.lang.String cpuCoreNumber) {
            this.props.cpuCoreNumber(cpuCoreNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuCoreNumber This parameter is required.
         */
        public Builder cpuCoreNumber(final com.aliyun.ros.cdk.core.IResolvable cpuCoreNumber) {
            this.props.cpuCoreNumber(cpuCoreNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param image This parameter is required.
         */
        public Builder image(final java.lang.String image) {
            this.props.image(image);
            return this;
        }
        /**
         * @return {@code this}
         * @param image This parameter is required.
         */
        public Builder image(final com.aliyun.ros.cdk.core.IResolvable image) {
            this.props.image(image);
            return this;
        }

        /**
         * @return {@code this}
         * @param kind This parameter is required.
         */
        public Builder kind(final java.lang.String kind) {
            this.props.kind(kind);
            return this;
        }
        /**
         * @return {@code this}
         * @param kind This parameter is required.
         */
        public Builder kind(final com.aliyun.ros.cdk.core.IResolvable kind) {
            this.props.kind(kind);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskConfig This parameter is required.
         */
        public Builder diskConfig(final com.aliyun.ros.cdk.core.IResolvable diskConfig) {
            this.props.diskConfig(diskConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskConfig This parameter is required.
         */
        public Builder diskConfig(final com.aliyun.ros.cdk.acs.RosApplicationPod.DiskConfigProperty diskConfig) {
            this.props.diskConfig(diskConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param gpuCoreNumber This parameter is required.
         */
        public Builder gpuCoreNumber(final java.lang.Number gpuCoreNumber) {
            this.props.gpuCoreNumber(gpuCoreNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuCoreNumber This parameter is required.
         */
        public Builder gpuCoreNumber(final com.aliyun.ros.cdk.core.IResolvable gpuCoreNumber) {
            this.props.gpuCoreNumber(gpuCoreNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param gpuModelSeries This parameter is required.
         */
        public Builder gpuModelSeries(final java.lang.String gpuModelSeries) {
            this.props.gpuModelSeries(gpuModelSeries);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuModelSeries This parameter is required.
         */
        public Builder gpuModelSeries(final com.aliyun.ros.cdk.core.IResolvable gpuModelSeries) {
            this.props.gpuModelSeries(gpuModelSeries);
            return this;
        }

        /**
         * @return {@code this}
         * @param gpuType This parameter is required.
         */
        public Builder gpuType(final java.lang.String gpuType) {
            this.props.gpuType(gpuType);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuType This parameter is required.
         */
        public Builder gpuType(final com.aliyun.ros.cdk.core.IResolvable gpuType) {
            this.props.gpuType(gpuType);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicas This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicas This parameter is required.
         */
        public Builder replicas(final com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.acs.RosApplicationPod}.
         */
        @Override
        public com.aliyun.ros.cdk.acs.RosApplicationPod build() {
            return new com.aliyun.ros.cdk.acs.RosApplicationPod(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
