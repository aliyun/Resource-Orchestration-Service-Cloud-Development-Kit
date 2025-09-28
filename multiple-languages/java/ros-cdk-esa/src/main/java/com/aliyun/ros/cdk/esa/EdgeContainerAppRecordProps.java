package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>EdgeContainerAppRecord</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.397Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.EdgeContainerAppRecordProps")
@software.amazon.jsii.Jsii.Proxy(EdgeContainerAppRecordProps.Jsii$Proxy.class)
public interface EdgeContainerAppRecordProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appId: The application ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     * Property recordName: The associated domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRecordName();

    /**
     * Property siteId: The website ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * @return a {@link Builder} of {@link EdgeContainerAppRecordProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EdgeContainerAppRecordProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EdgeContainerAppRecordProps> {
        java.lang.Object appId;
        java.lang.Object recordName;
        java.lang.Object siteId;

        /**
         * Sets the value of {@link EdgeContainerAppRecordProps#getAppId}
         * @param appId Property appId: The application ID. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link EdgeContainerAppRecordProps#getAppId}
         * @param appId Property appId: The application ID. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link EdgeContainerAppRecordProps#getRecordName}
         * @param recordName Property recordName: The associated domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder recordName(java.lang.String recordName) {
            this.recordName = recordName;
            return this;
        }

        /**
         * Sets the value of {@link EdgeContainerAppRecordProps#getRecordName}
         * @param recordName Property recordName: The associated domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder recordName(com.aliyun.ros.cdk.core.IResolvable recordName) {
            this.recordName = recordName;
            return this;
        }

        /**
         * Sets the value of {@link EdgeContainerAppRecordProps#getSiteId}
         * @param siteId Property siteId: The website ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link EdgeContainerAppRecordProps#getSiteId}
         * @param siteId Property siteId: The website ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EdgeContainerAppRecordProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EdgeContainerAppRecordProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EdgeContainerAppRecordProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EdgeContainerAppRecordProps {
        private final java.lang.Object appId;
        private final java.lang.Object recordName;
        private final java.lang.Object siteId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recordName = software.amazon.jsii.Kernel.get(this, "recordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
            this.recordName = java.util.Objects.requireNonNull(builder.recordName, "recordName is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getRecordName() {
            return this.recordName;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));
            data.set("recordName", om.valueToTree(this.getRecordName()));
            data.set("siteId", om.valueToTree(this.getSiteId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.EdgeContainerAppRecordProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EdgeContainerAppRecordProps.Jsii$Proxy that = (EdgeContainerAppRecordProps.Jsii$Proxy) o;

            if (!appId.equals(that.appId)) return false;
            if (!recordName.equals(that.recordName)) return false;
            return this.siteId.equals(that.siteId);
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            result = 31 * result + (this.recordName.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            return result;
        }
    }
}
