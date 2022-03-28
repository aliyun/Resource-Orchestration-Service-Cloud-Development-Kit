package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS template type:  `ALIYUN::PVTZ::ZoneVpcBinder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.211Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosZoneVpcBinder")
public class RosZoneVpcBinder extends com.aliyun.ros.cdk.core.RosResource {

    protected RosZoneVpcBinder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosZoneVpcBinder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.pvtz.RosZoneVpcBinder.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosZoneVpcBinder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RosZoneVpcBinderProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcs() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcs() {
        return software.amazon.jsii.Kernel.get(this, "vpcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcs", java.util.Objects.requireNonNull(value, "vpcs is required"));
    }

    /**
     */
    public void setVpcs(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "vpcs", java.util.Objects.requireNonNull(value, "vpcs is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRegionId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         * @return a {@link Builder} of {@link VpcsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcsProperty> {
            java.lang.Object regionId;
            java.lang.Object vpcId;

            /**
             * Sets the value of {@link VpcsProperty#getRegionId}
             * @param regionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link VpcsProperty#getRegionId}
             * @param regionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link VpcsProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcsProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VpcsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcsProperty {
            private final java.lang.Object regionId;
            private final java.lang.Object vpcId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.regionId = java.util.Objects.requireNonNull(builder.regionId, "regionId is required");
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("regionId", om.valueToTree(this.getRegionId()));
                data.set("vpcId", om.valueToTree(this.getVpcId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcsProperty.Jsii$Proxy that = (VpcsProperty.Jsii$Proxy) o;

                if (!regionId.equals(that.regionId)) return false;
                return this.vpcId.equals(that.vpcId);
            }

            @Override
            public final int hashCode() {
                int result = this.regionId.hashCode();
                result = 31 * result + (this.vpcId.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.RosZoneVpcBinder}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.RosZoneVpcBinder> {
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
        private final com.aliyun.ros.cdk.pvtz.RosZoneVpcBinderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.RosZoneVpcBinderProps.Builder();
        }

        /**
         * @return {@code this}
         * @param vpcs This parameter is required.
         */
        public Builder vpcs(final com.aliyun.ros.cdk.core.IResolvable vpcs) {
            this.props.vpcs(vpcs);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcs This parameter is required.
         */
        public Builder vpcs(final java.util.List<? extends java.lang.Object> vpcs) {
            this.props.vpcs(vpcs);
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.pvtz.RosZoneVpcBinder}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.RosZoneVpcBinder build() {
            return new com.aliyun.ros.cdk.pvtz.RosZoneVpcBinder(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
