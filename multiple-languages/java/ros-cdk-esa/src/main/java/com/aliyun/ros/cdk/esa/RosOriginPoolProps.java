package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosOriginPool</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.655Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosOriginPoolProps")
@software.amazon.jsii.Jsii.Proxy(RosOriginPoolProps.Jsii$Proxy.class)
public interface RosOriginPoolProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOriginPoolName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrigins() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOriginPoolProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOriginPoolProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOriginPoolProps> {
        java.lang.Object originPoolName;
        java.lang.Object siteId;
        java.lang.Object enabled;
        java.lang.Object origins;

        /**
         * Sets the value of {@link RosOriginPoolProps#getOriginPoolName}
         * @param originPoolName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder originPoolName(java.lang.String originPoolName) {
            this.originPoolName = originPoolName;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getOriginPoolName}
         * @param originPoolName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder originPoolName(com.aliyun.ros.cdk.core.IResolvable originPoolName) {
            this.originPoolName = originPoolName;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(java.lang.Boolean enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getOrigins}
         * @param origins the value to be set.
         * @return {@code this}
         */
        public Builder origins(com.aliyun.ros.cdk.core.IResolvable origins) {
            this.origins = origins;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginPoolProps#getOrigins}
         * @param origins the value to be set.
         * @return {@code this}
         */
        public Builder origins(java.util.List<? extends java.lang.Object> origins) {
            this.origins = origins;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOriginPoolProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOriginPoolProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosOriginPoolProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOriginPoolProps {
        private final java.lang.Object originPoolName;
        private final java.lang.Object siteId;
        private final java.lang.Object enabled;
        private final java.lang.Object origins;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.originPoolName = software.amazon.jsii.Kernel.get(this, "originPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.origins = software.amazon.jsii.Kernel.get(this, "origins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.originPoolName = java.util.Objects.requireNonNull(builder.originPoolName, "originPoolName is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.enabled = builder.enabled;
            this.origins = builder.origins;
        }

        @Override
        public final java.lang.Object getOriginPoolName() {
            return this.originPoolName;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getEnabled() {
            return this.enabled;
        }

        @Override
        public final java.lang.Object getOrigins() {
            return this.origins;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("originPoolName", om.valueToTree(this.getOriginPoolName()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getEnabled() != null) {
                data.set("enabled", om.valueToTree(this.getEnabled()));
            }
            if (this.getOrigins() != null) {
                data.set("origins", om.valueToTree(this.getOrigins()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosOriginPoolProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOriginPoolProps.Jsii$Proxy that = (RosOriginPoolProps.Jsii$Proxy) o;

            if (!originPoolName.equals(that.originPoolName)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.enabled != null ? !this.enabled.equals(that.enabled) : that.enabled != null) return false;
            return this.origins != null ? this.origins.equals(that.origins) : that.origins == null;
        }

        @Override
        public final int hashCode() {
            int result = this.originPoolName.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.enabled != null ? this.enabled.hashCode() : 0);
            result = 31 * result + (this.origins != null ? this.origins.hashCode() : 0);
            return result;
        }
    }
}
