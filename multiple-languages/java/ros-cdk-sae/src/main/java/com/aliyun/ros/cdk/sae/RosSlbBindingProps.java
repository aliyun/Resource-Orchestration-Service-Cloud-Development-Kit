package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>RosSlbBinding</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.159Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosSlbBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosSlbBindingProps.Jsii$Proxy.class)
public interface RosSlbBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntranet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSlbBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSlbBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSlbBindingProps> {
        java.lang.Object appId;
        java.lang.Object internet;
        java.lang.Object internetSlbId;
        java.lang.Object intranet;
        java.lang.Object intranetSlbId;

        /**
         * Sets the value of {@link RosSlbBindingProps#getAppId}
         * @param appId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getAppId}
         * @param appId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getInternet}
         * @param internet the value to be set.
         * @return {@code this}
         */
        public Builder internet(java.lang.String internet) {
            this.internet = internet;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getInternet}
         * @param internet the value to be set.
         * @return {@code this}
         */
        public Builder internet(com.aliyun.ros.cdk.core.IResolvable internet) {
            this.internet = internet;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getInternetSlbId}
         * @param internetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbId(java.lang.String internetSlbId) {
            this.internetSlbId = internetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getInternetSlbId}
         * @param internetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbId(com.aliyun.ros.cdk.core.IResolvable internetSlbId) {
            this.internetSlbId = internetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getIntranet}
         * @param intranet the value to be set.
         * @return {@code this}
         */
        public Builder intranet(java.lang.String intranet) {
            this.intranet = intranet;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getIntranet}
         * @param intranet the value to be set.
         * @return {@code this}
         */
        public Builder intranet(com.aliyun.ros.cdk.core.IResolvable intranet) {
            this.intranet = intranet;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getIntranetSlbId}
         * @param intranetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbId(java.lang.String intranetSlbId) {
            this.intranetSlbId = intranetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosSlbBindingProps#getIntranetSlbId}
         * @param intranetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbId(com.aliyun.ros.cdk.core.IResolvable intranetSlbId) {
            this.intranetSlbId = intranetSlbId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSlbBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSlbBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSlbBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSlbBindingProps {
        private final java.lang.Object appId;
        private final java.lang.Object internet;
        private final java.lang.Object internetSlbId;
        private final java.lang.Object intranet;
        private final java.lang.Object intranetSlbId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internet = software.amazon.jsii.Kernel.get(this, "internet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetSlbId = software.amazon.jsii.Kernel.get(this, "internetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intranet = software.amazon.jsii.Kernel.get(this, "intranet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intranetSlbId = software.amazon.jsii.Kernel.get(this, "intranetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
            this.internet = builder.internet;
            this.internetSlbId = builder.internetSlbId;
            this.intranet = builder.intranet;
            this.intranetSlbId = builder.intranetSlbId;
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getInternet() {
            return this.internet;
        }

        @Override
        public final java.lang.Object getInternetSlbId() {
            return this.internetSlbId;
        }

        @Override
        public final java.lang.Object getIntranet() {
            return this.intranet;
        }

        @Override
        public final java.lang.Object getIntranetSlbId() {
            return this.intranetSlbId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));
            if (this.getInternet() != null) {
                data.set("internet", om.valueToTree(this.getInternet()));
            }
            if (this.getInternetSlbId() != null) {
                data.set("internetSlbId", om.valueToTree(this.getInternetSlbId()));
            }
            if (this.getIntranet() != null) {
                data.set("intranet", om.valueToTree(this.getIntranet()));
            }
            if (this.getIntranetSlbId() != null) {
                data.set("intranetSlbId", om.valueToTree(this.getIntranetSlbId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosSlbBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSlbBindingProps.Jsii$Proxy that = (RosSlbBindingProps.Jsii$Proxy) o;

            if (!appId.equals(that.appId)) return false;
            if (this.internet != null ? !this.internet.equals(that.internet) : that.internet != null) return false;
            if (this.internetSlbId != null ? !this.internetSlbId.equals(that.internetSlbId) : that.internetSlbId != null) return false;
            if (this.intranet != null ? !this.intranet.equals(that.intranet) : that.intranet != null) return false;
            return this.intranetSlbId != null ? this.intranetSlbId.equals(that.intranetSlbId) : that.intranetSlbId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            result = 31 * result + (this.internet != null ? this.internet.hashCode() : 0);
            result = 31 * result + (this.internetSlbId != null ? this.internetSlbId.hashCode() : 0);
            result = 31 * result + (this.intranet != null ? this.intranet.hashCode() : 0);
            result = 31 * result + (this.intranetSlbId != null ? this.intranetSlbId.hashCode() : 0);
            return result;
        }
    }
}
