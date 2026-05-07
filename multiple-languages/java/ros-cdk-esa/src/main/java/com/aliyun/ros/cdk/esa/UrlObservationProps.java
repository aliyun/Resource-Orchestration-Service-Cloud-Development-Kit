package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>UrlObservation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.274Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.UrlObservationProps")
@software.amazon.jsii.Jsii.Proxy(UrlObservationProps.Jsii$Proxy.class)
public interface UrlObservationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property sdkType: SDK integration mode.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li><strong>automatic</strong>: automatic integration.</li>
     * <li><strong>manual</strong>: manual integration.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSdkType();

    /**
     * Property siteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property url: The URL of the page to monitor.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUrl();

    /**
     * @return a {@link Builder} of {@link UrlObservationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UrlObservationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UrlObservationProps> {
        java.lang.Object sdkType;
        java.lang.Object siteId;
        java.lang.Object url;

        /**
         * Sets the value of {@link UrlObservationProps#getSdkType}
         * @param sdkType Property sdkType: SDK integration mode. This parameter is required.
         *                Value:
         *                <p>
         *                <ul>
         *                <li><strong>automatic</strong>: automatic integration.</li>
         *                <li><strong>manual</strong>: manual integration.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder sdkType(java.lang.String sdkType) {
            this.sdkType = sdkType;
            return this;
        }

        /**
         * Sets the value of {@link UrlObservationProps#getSdkType}
         * @param sdkType Property sdkType: SDK integration mode. This parameter is required.
         *                Value:
         *                <p>
         *                <ul>
         *                <li><strong>automatic</strong>: automatic integration.</li>
         *                <li><strong>manual</strong>: manual integration.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder sdkType(com.aliyun.ros.cdk.core.IResolvable sdkType) {
            this.sdkType = sdkType;
            return this;
        }

        /**
         * Sets the value of {@link UrlObservationProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link UrlObservationProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link UrlObservationProps#getUrl}
         * @param url Property url: The URL of the page to monitor. This parameter is required.
         * @return {@code this}
         */
        public Builder url(java.lang.String url) {
            this.url = url;
            return this;
        }

        /**
         * Sets the value of {@link UrlObservationProps#getUrl}
         * @param url Property url: The URL of the page to monitor. This parameter is required.
         * @return {@code this}
         */
        public Builder url(com.aliyun.ros.cdk.core.IResolvable url) {
            this.url = url;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UrlObservationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UrlObservationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UrlObservationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UrlObservationProps {
        private final java.lang.Object sdkType;
        private final java.lang.Object siteId;
        private final java.lang.Object url;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sdkType = software.amazon.jsii.Kernel.get(this, "sdkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.url = software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sdkType = java.util.Objects.requireNonNull(builder.sdkType, "sdkType is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.url = java.util.Objects.requireNonNull(builder.url, "url is required");
        }

        @Override
        public final java.lang.Object getSdkType() {
            return this.sdkType;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getUrl() {
            return this.url;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sdkType", om.valueToTree(this.getSdkType()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("url", om.valueToTree(this.getUrl()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.UrlObservationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UrlObservationProps.Jsii$Proxy that = (UrlObservationProps.Jsii$Proxy) o;

            if (!sdkType.equals(that.sdkType)) return false;
            if (!siteId.equals(that.siteId)) return false;
            return this.url.equals(that.url);
        }

        @Override
        public final int hashCode() {
            int result = this.sdkType.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.url.hashCode());
            return result;
        }
    }
}
