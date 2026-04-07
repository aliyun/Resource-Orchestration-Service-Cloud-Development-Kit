package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::IpamPool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:31.014Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpamPool")
public class RosIpamPool extends com.aliyun.ros.cdk.core.RosResource {

    protected RosIpamPool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosIpamPool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosIpamPool.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosIpamPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosIpamPoolProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getIpamScopeId() {
        return software.amazon.jsii.Kernel.get(this, "ipamScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamScopeId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamScopeId", java.util.Objects.requireNonNull(value, "ipamScopeId is required"));
    }

    /**
     */
    public void setIpamScopeId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamScopeId", java.util.Objects.requireNonNull(value, "ipamScopeId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllocationDefaultCidrMask() {
        return software.amazon.jsii.Kernel.get(this, "allocationDefaultCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllocationDefaultCidrMask(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "allocationDefaultCidrMask", value);
    }

    /**
     */
    public void setAllocationDefaultCidrMask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allocationDefaultCidrMask", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllocationMaxCidrMask() {
        return software.amazon.jsii.Kernel.get(this, "allocationMaxCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllocationMaxCidrMask(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "allocationMaxCidrMask", value);
    }

    /**
     */
    public void setAllocationMaxCidrMask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allocationMaxCidrMask", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllocationMinCidrMask() {
        return software.amazon.jsii.Kernel.get(this, "allocationMinCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllocationMinCidrMask(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "allocationMinCidrMask", value);
    }

    /**
     */
    public void setAllocationMinCidrMask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allocationMinCidrMask", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoImport() {
        return software.amazon.jsii.Kernel.get(this, "autoImport", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoImport(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoImport", value);
    }

    /**
     */
    public void setAutoImport(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoImport", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolDescription() {
        return software.amazon.jsii.Kernel.get(this, "ipamPoolDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamPoolDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolDescription", value);
    }

    /**
     */
    public void setIpamPoolDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolName() {
        return software.amazon.jsii.Kernel.get(this, "ipamPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamPoolName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolName", value);
    }

    /**
     */
    public void setIpamPoolName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6Isp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6Isp", value);
    }

    /**
     */
    public void setIpv6Isp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6Isp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipVersion", value);
    }

    /**
     */
    public void setIpVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPoolRegionId() {
        return software.amazon.jsii.Kernel.get(this, "poolRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPoolRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "poolRegionId", value);
    }

    /**
     */
    public void setPoolRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "poolRegionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "sourceIpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceIpamPoolId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceIpamPoolId", value);
    }

    /**
     */
    public void setSourceIpamPoolId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceIpamPoolId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpamPool.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpamPool.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosIpamPool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosIpamPool> {
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
        private final com.aliyun.ros.cdk.vpc.RosIpamPoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosIpamPoolProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ipamScopeId This parameter is required.
         */
        public Builder ipamScopeId(final java.lang.String ipamScopeId) {
            this.props.ipamScopeId(ipamScopeId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipamScopeId This parameter is required.
         */
        public Builder ipamScopeId(final com.aliyun.ros.cdk.core.IResolvable ipamScopeId) {
            this.props.ipamScopeId(ipamScopeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param allocationDefaultCidrMask This parameter is required.
         */
        public Builder allocationDefaultCidrMask(final java.lang.Number allocationDefaultCidrMask) {
            this.props.allocationDefaultCidrMask(allocationDefaultCidrMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param allocationDefaultCidrMask This parameter is required.
         */
        public Builder allocationDefaultCidrMask(final com.aliyun.ros.cdk.core.IResolvable allocationDefaultCidrMask) {
            this.props.allocationDefaultCidrMask(allocationDefaultCidrMask);
            return this;
        }

        /**
         * @return {@code this}
         * @param allocationMaxCidrMask This parameter is required.
         */
        public Builder allocationMaxCidrMask(final java.lang.Number allocationMaxCidrMask) {
            this.props.allocationMaxCidrMask(allocationMaxCidrMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param allocationMaxCidrMask This parameter is required.
         */
        public Builder allocationMaxCidrMask(final com.aliyun.ros.cdk.core.IResolvable allocationMaxCidrMask) {
            this.props.allocationMaxCidrMask(allocationMaxCidrMask);
            return this;
        }

        /**
         * @return {@code this}
         * @param allocationMinCidrMask This parameter is required.
         */
        public Builder allocationMinCidrMask(final java.lang.Number allocationMinCidrMask) {
            this.props.allocationMinCidrMask(allocationMinCidrMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param allocationMinCidrMask This parameter is required.
         */
        public Builder allocationMinCidrMask(final com.aliyun.ros.cdk.core.IResolvable allocationMinCidrMask) {
            this.props.allocationMinCidrMask(allocationMinCidrMask);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoImport This parameter is required.
         */
        public Builder autoImport(final java.lang.Boolean autoImport) {
            this.props.autoImport(autoImport);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoImport This parameter is required.
         */
        public Builder autoImport(final com.aliyun.ros.cdk.core.IResolvable autoImport) {
            this.props.autoImport(autoImport);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipamPoolDescription This parameter is required.
         */
        public Builder ipamPoolDescription(final java.lang.String ipamPoolDescription) {
            this.props.ipamPoolDescription(ipamPoolDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipamPoolDescription This parameter is required.
         */
        public Builder ipamPoolDescription(final com.aliyun.ros.cdk.core.IResolvable ipamPoolDescription) {
            this.props.ipamPoolDescription(ipamPoolDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipamPoolName This parameter is required.
         */
        public Builder ipamPoolName(final java.lang.String ipamPoolName) {
            this.props.ipamPoolName(ipamPoolName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipamPoolName This parameter is required.
         */
        public Builder ipamPoolName(final com.aliyun.ros.cdk.core.IResolvable ipamPoolName) {
            this.props.ipamPoolName(ipamPoolName);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6Isp This parameter is required.
         */
        public Builder ipv6Isp(final java.lang.String ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6Isp This parameter is required.
         */
        public Builder ipv6Isp(final com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipVersion This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipVersion This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param poolRegionId This parameter is required.
         */
        public Builder poolRegionId(final java.lang.String poolRegionId) {
            this.props.poolRegionId(poolRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param poolRegionId This parameter is required.
         */
        public Builder poolRegionId(final com.aliyun.ros.cdk.core.IResolvable poolRegionId) {
            this.props.poolRegionId(poolRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceIpamPoolId This parameter is required.
         */
        public Builder sourceIpamPoolId(final java.lang.String sourceIpamPoolId) {
            this.props.sourceIpamPoolId(sourceIpamPoolId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceIpamPoolId This parameter is required.
         */
        public Builder sourceIpamPoolId(final com.aliyun.ros.cdk.core.IResolvable sourceIpamPoolId) {
            this.props.sourceIpamPoolId(sourceIpamPoolId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosIpamPool}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosIpamPool build() {
            return new com.aliyun.ros.cdk.vpc.RosIpamPool(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
