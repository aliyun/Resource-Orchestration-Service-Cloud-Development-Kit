package com.aliyun.ros.cdk.dns;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DNS::CacheDomain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.969Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosCacheDomain")
public class RosCacheDomain extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCacheDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCacheDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dns.RosCacheDomain.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCacheDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RosCacheDomainProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCacheTtlMax() {
        return software.amazon.jsii.Kernel.get(this, "cacheTtlMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCacheTtlMax(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cacheTtlMax", java.util.Objects.requireNonNull(value, "cacheTtlMax is required"));
    }

    /**
     */
    public void setCacheTtlMax(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cacheTtlMax", java.util.Objects.requireNonNull(value, "cacheTtlMax is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCacheTtlMin() {
        return software.amazon.jsii.Kernel.get(this, "cacheTtlMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCacheTtlMin(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cacheTtlMin", java.util.Objects.requireNonNull(value, "cacheTtlMin is required"));
    }

    /**
     */
    public void setCacheTtlMin(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cacheTtlMin", java.util.Objects.requireNonNull(value, "cacheTtlMin is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainName() {
        return software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainName", java.util.Objects.requireNonNull(value, "domainName is required"));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainName", java.util.Objects.requireNonNull(value, "domainName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceDnsServer() {
        return software.amazon.jsii.Kernel.get(this, "sourceDnsServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceDnsServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceDnsServer", java.util.Objects.requireNonNull(value, "sourceDnsServer is required"));
    }

    /**
     */
    public void setSourceDnsServer(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.dns.RosCacheDomain.SourceDnsServerProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.dns.RosCacheDomain.SourceDnsServerProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sourceDnsServer", java.util.Objects.requireNonNull(value, "sourceDnsServer is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceEdns() {
        return software.amazon.jsii.Kernel.get(this, "sourceEdns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceEdns(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceEdns", java.util.Objects.requireNonNull(value, "sourceEdns is required"));
    }

    /**
     */
    public void setSourceEdns(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceEdns", java.util.Objects.requireNonNull(value, "sourceEdns is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceProtocol() {
        return software.amazon.jsii.Kernel.get(this, "sourceProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceProtocol", java.util.Objects.requireNonNull(value, "sourceProtocol is required"));
    }

    /**
     */
    public void setSourceProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceProtocol", java.util.Objects.requireNonNull(value, "sourceProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceDnsServerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceDnsServerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getHost();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPort();

        /**
         * @return a {@link Builder} of {@link SourceDnsServerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceDnsServerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceDnsServerProperty> {
            java.lang.Object host;
            java.lang.Object port;

            /**
             * Sets the value of {@link SourceDnsServerProperty#getHost}
             * @param host the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link SourceDnsServerProperty#getHost}
             * @param host the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link SourceDnsServerProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SourceDnsServerProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceDnsServerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceDnsServerProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceDnsServerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceDnsServerProperty {
            private final java.lang.Object host;
            private final java.lang.Object port;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = java.util.Objects.requireNonNull(builder.host, "host is required");
                this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("host", om.valueToTree(this.getHost()));
                data.set("port", om.valueToTree(this.getPort()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceDnsServerProperty.Jsii$Proxy that = (SourceDnsServerProperty.Jsii$Proxy) o;

                if (!host.equals(that.host)) return false;
                return this.port.equals(that.port);
            }

            @Override
            public final int hashCode() {
                int result = this.host.hashCode();
                result = 31 * result + (this.port.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.RosCacheDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.RosCacheDomain> {
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
        private final com.aliyun.ros.cdk.dns.RosCacheDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.RosCacheDomainProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cacheTtlMax This parameter is required.
         */
        public Builder cacheTtlMax(final java.lang.Number cacheTtlMax) {
            this.props.cacheTtlMax(cacheTtlMax);
            return this;
        }
        /**
         * @return {@code this}
         * @param cacheTtlMax This parameter is required.
         */
        public Builder cacheTtlMax(final com.aliyun.ros.cdk.core.IResolvable cacheTtlMax) {
            this.props.cacheTtlMax(cacheTtlMax);
            return this;
        }

        /**
         * @return {@code this}
         * @param cacheTtlMin This parameter is required.
         */
        public Builder cacheTtlMin(final java.lang.Number cacheTtlMin) {
            this.props.cacheTtlMin(cacheTtlMin);
            return this;
        }
        /**
         * @return {@code this}
         * @param cacheTtlMin This parameter is required.
         */
        public Builder cacheTtlMin(final com.aliyun.ros.cdk.core.IResolvable cacheTtlMin) {
            this.props.cacheTtlMin(cacheTtlMin);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceDnsServer This parameter is required.
         */
        public Builder sourceDnsServer(final com.aliyun.ros.cdk.core.IResolvable sourceDnsServer) {
            this.props.sourceDnsServer(sourceDnsServer);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceDnsServer This parameter is required.
         */
        public Builder sourceDnsServer(final java.util.List<? extends java.lang.Object> sourceDnsServer) {
            this.props.sourceDnsServer(sourceDnsServer);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEdns This parameter is required.
         */
        public Builder sourceEdns(final java.lang.String sourceEdns) {
            this.props.sourceEdns(sourceEdns);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEdns This parameter is required.
         */
        public Builder sourceEdns(final com.aliyun.ros.cdk.core.IResolvable sourceEdns) {
            this.props.sourceEdns(sourceEdns);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceProtocol This parameter is required.
         */
        public Builder sourceProtocol(final java.lang.String sourceProtocol) {
            this.props.sourceProtocol(sourceProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceProtocol This parameter is required.
         */
        public Builder sourceProtocol(final com.aliyun.ros.cdk.core.IResolvable sourceProtocol) {
            this.props.sourceProtocol(sourceProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.RosCacheDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.RosCacheDomain build() {
            return new com.aliyun.ros.cdk.dns.RosCacheDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
