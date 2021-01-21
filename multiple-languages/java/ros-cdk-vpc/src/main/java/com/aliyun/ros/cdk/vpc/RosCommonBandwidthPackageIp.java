package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackageIp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:03.616Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp")
public class RosCommonBandwidthPackageIp extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCommonBandwidthPackageIp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCommonBandwidthPackageIp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIp.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCommonBandwidthPackageIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIpProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setBandwidthPackageId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthPackageId", java.util.Objects.requireNonNull(value, "bandwidthPackageId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEips() {
        return software.amazon.jsii.Kernel.get(this, "eips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEips(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eips", java.util.Objects.requireNonNull(value, "eips is required"));
    }

    /**
     */
    public void setEips(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "eips", java.util.Objects.requireNonNull(value, "eips is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty")
    @software.amazon.jsii.Jsii.Proxy(EipsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EipsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getAllocationId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getBandwidth() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EipsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EipsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EipsProperty> {
            private java.lang.String allocationId;
            private java.lang.Number bandwidth;

            /**
             * Sets the value of {@link EipsProperty#getAllocationId}
             * @param allocationId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationId(java.lang.String allocationId) {
                this.allocationId = allocationId;
                return this;
            }

            /**
             * Sets the value of {@link EipsProperty#getBandwidth}
             * @param bandwidth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bandwidth(java.lang.Number bandwidth) {
                this.bandwidth = bandwidth;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EipsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EipsProperty build() {
                return new Jsii$Proxy(allocationId, bandwidth);
            }
        }

        /**
         * An implementation for {@link EipsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EipsProperty {
            private final java.lang.String allocationId;
            private final java.lang.Number bandwidth;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allocationId = software.amazon.jsii.Kernel.get(this, "allocationId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String allocationId, final java.lang.Number bandwidth) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allocationId = java.util.Objects.requireNonNull(allocationId, "allocationId is required");
                this.bandwidth = bandwidth;
            }

            @Override
            public final java.lang.String getAllocationId() {
                return this.allocationId;
            }

            @Override
            public final java.lang.Number getBandwidth() {
                return this.bandwidth;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("allocationId", om.valueToTree(this.getAllocationId()));
                if (this.getBandwidth() != null) {
                    data.set("bandwidth", om.valueToTree(this.getBandwidth()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EipsProperty.Jsii$Proxy that = (EipsProperty.Jsii$Proxy) o;

                if (!allocationId.equals(that.allocationId)) return false;
                return this.bandwidth != null ? this.bandwidth.equals(that.bandwidth) : that.bandwidth == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allocationId.hashCode();
                result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIp> {
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
        private final com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIpProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIpProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bandwidthPackageId This parameter is required.
         */
        public Builder bandwidthPackageId(final java.lang.String bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param eips This parameter is required.
         */
        public Builder eips(final com.aliyun.ros.cdk.core.IResolvable eips) {
            this.props.eips(eips);
            return this;
        }
        /**
         * @return {@code this}
         * @param eips This parameter is required.
         */
        public Builder eips(final java.util.List<? extends java.lang.Object> eips) {
            this.props.eips(eips);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIp}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIp build() {
            return new com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackageIp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
