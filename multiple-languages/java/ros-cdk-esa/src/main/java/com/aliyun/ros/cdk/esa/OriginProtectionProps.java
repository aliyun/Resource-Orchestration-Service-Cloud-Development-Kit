package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>OriginProtection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.737Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginProtectionProps")
@software.amazon.jsii.Jsii.Proxy(OriginProtectionProps.Jsii$Proxy.class)
public interface OriginProtectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: Site Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property originConverge: The IP convergence status.
     * <p>
     * <ul>
     * <li>on</li>
     * <li>off.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginConverge() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OriginProtectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OriginProtectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OriginProtectionProps> {
        java.lang.Object siteId;
        java.lang.Object originConverge;

        /**
         * Sets the value of {@link OriginProtectionProps#getSiteId}
         * @param siteId Property siteId: Site Id. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginProtectionProps#getSiteId}
         * @param siteId Property siteId: Site Id. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginProtectionProps#getOriginConverge}
         * @param originConverge Property originConverge: The IP convergence status.
         *                       <ul>
         *                       <li>on</li>
         *                       <li>off.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder originConverge(java.lang.String originConverge) {
            this.originConverge = originConverge;
            return this;
        }

        /**
         * Sets the value of {@link OriginProtectionProps#getOriginConverge}
         * @param originConverge Property originConverge: The IP convergence status.
         *                       <ul>
         *                       <li>on</li>
         *                       <li>off.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder originConverge(com.aliyun.ros.cdk.core.IResolvable originConverge) {
            this.originConverge = originConverge;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OriginProtectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OriginProtectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OriginProtectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OriginProtectionProps {
        private final java.lang.Object siteId;
        private final java.lang.Object originConverge;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originConverge = software.amazon.jsii.Kernel.get(this, "originConverge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.originConverge = builder.originConverge;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getOriginConverge() {
            return this.originConverge;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getOriginConverge() != null) {
                data.set("originConverge", om.valueToTree(this.getOriginConverge()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.OriginProtectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OriginProtectionProps.Jsii$Proxy that = (OriginProtectionProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            return this.originConverge != null ? this.originConverge.equals(that.originConverge) : that.originConverge == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.originConverge != null ? this.originConverge.hashCode() : 0);
            return result;
        }
    }
}
