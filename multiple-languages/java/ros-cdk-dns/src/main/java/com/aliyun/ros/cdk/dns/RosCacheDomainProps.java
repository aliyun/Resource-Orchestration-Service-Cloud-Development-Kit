package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>RosCacheDomain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:27:10.898Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosCacheDomainProps")
@software.amazon.jsii.Jsii.Proxy(RosCacheDomainProps.Jsii$Proxy.class)
public interface RosCacheDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCacheTtlMax();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCacheTtlMin();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceDnsServer();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceEdns();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCacheDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCacheDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCacheDomainProps> {
        java.lang.Object cacheTtlMax;
        java.lang.Object cacheTtlMin;
        java.lang.Object domainName;
        java.lang.Object instanceId;
        java.lang.Object sourceDnsServer;
        java.lang.Object sourceEdns;
        java.lang.Object sourceProtocol;
        java.lang.Object remark;

        /**
         * Sets the value of {@link RosCacheDomainProps#getCacheTtlMax}
         * @param cacheTtlMax the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cacheTtlMax(java.lang.Number cacheTtlMax) {
            this.cacheTtlMax = cacheTtlMax;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getCacheTtlMax}
         * @param cacheTtlMax the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cacheTtlMax(com.aliyun.ros.cdk.core.IResolvable cacheTtlMax) {
            this.cacheTtlMax = cacheTtlMax;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getCacheTtlMin}
         * @param cacheTtlMin the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cacheTtlMin(java.lang.Number cacheTtlMin) {
            this.cacheTtlMin = cacheTtlMin;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getCacheTtlMin}
         * @param cacheTtlMin the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cacheTtlMin(com.aliyun.ros.cdk.core.IResolvable cacheTtlMin) {
            this.cacheTtlMin = cacheTtlMin;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getSourceDnsServer}
         * @param sourceDnsServer the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceDnsServer(com.aliyun.ros.cdk.core.IResolvable sourceDnsServer) {
            this.sourceDnsServer = sourceDnsServer;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getSourceDnsServer}
         * @param sourceDnsServer the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceDnsServer(java.util.List<? extends java.lang.Object> sourceDnsServer) {
            this.sourceDnsServer = sourceDnsServer;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getSourceEdns}
         * @param sourceEdns the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEdns(java.lang.String sourceEdns) {
            this.sourceEdns = sourceEdns;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getSourceEdns}
         * @param sourceEdns the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEdns(com.aliyun.ros.cdk.core.IResolvable sourceEdns) {
            this.sourceEdns = sourceEdns;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getSourceProtocol}
         * @param sourceProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceProtocol(java.lang.String sourceProtocol) {
            this.sourceProtocol = sourceProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getSourceProtocol}
         * @param sourceProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceProtocol(com.aliyun.ros.cdk.core.IResolvable sourceProtocol) {
            this.sourceProtocol = sourceProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheDomainProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCacheDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCacheDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCacheDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCacheDomainProps {
        private final java.lang.Object cacheTtlMax;
        private final java.lang.Object cacheTtlMin;
        private final java.lang.Object domainName;
        private final java.lang.Object instanceId;
        private final java.lang.Object sourceDnsServer;
        private final java.lang.Object sourceEdns;
        private final java.lang.Object sourceProtocol;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cacheTtlMax = software.amazon.jsii.Kernel.get(this, "cacheTtlMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cacheTtlMin = software.amazon.jsii.Kernel.get(this, "cacheTtlMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDnsServer = software.amazon.jsii.Kernel.get(this, "sourceDnsServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEdns = software.amazon.jsii.Kernel.get(this, "sourceEdns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceProtocol = software.amazon.jsii.Kernel.get(this, "sourceProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cacheTtlMax = java.util.Objects.requireNonNull(builder.cacheTtlMax, "cacheTtlMax is required");
            this.cacheTtlMin = java.util.Objects.requireNonNull(builder.cacheTtlMin, "cacheTtlMin is required");
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.sourceDnsServer = java.util.Objects.requireNonNull(builder.sourceDnsServer, "sourceDnsServer is required");
            this.sourceEdns = java.util.Objects.requireNonNull(builder.sourceEdns, "sourceEdns is required");
            this.sourceProtocol = java.util.Objects.requireNonNull(builder.sourceProtocol, "sourceProtocol is required");
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getCacheTtlMax() {
            return this.cacheTtlMax;
        }

        @Override
        public final java.lang.Object getCacheTtlMin() {
            return this.cacheTtlMin;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getSourceDnsServer() {
            return this.sourceDnsServer;
        }

        @Override
        public final java.lang.Object getSourceEdns() {
            return this.sourceEdns;
        }

        @Override
        public final java.lang.Object getSourceProtocol() {
            return this.sourceProtocol;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cacheTtlMax", om.valueToTree(this.getCacheTtlMax()));
            data.set("cacheTtlMin", om.valueToTree(this.getCacheTtlMin()));
            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("sourceDnsServer", om.valueToTree(this.getSourceDnsServer()));
            data.set("sourceEdns", om.valueToTree(this.getSourceEdns()));
            data.set("sourceProtocol", om.valueToTree(this.getSourceProtocol()));
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosCacheDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCacheDomainProps.Jsii$Proxy that = (RosCacheDomainProps.Jsii$Proxy) o;

            if (!cacheTtlMax.equals(that.cacheTtlMax)) return false;
            if (!cacheTtlMin.equals(that.cacheTtlMin)) return false;
            if (!domainName.equals(that.domainName)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!sourceDnsServer.equals(that.sourceDnsServer)) return false;
            if (!sourceEdns.equals(that.sourceEdns)) return false;
            if (!sourceProtocol.equals(that.sourceProtocol)) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cacheTtlMax.hashCode();
            result = 31 * result + (this.cacheTtlMin.hashCode());
            result = 31 * result + (this.domainName.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.sourceDnsServer.hashCode());
            result = 31 * result + (this.sourceEdns.hashCode());
            result = 31 * result + (this.sourceProtocol.hashCode());
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
