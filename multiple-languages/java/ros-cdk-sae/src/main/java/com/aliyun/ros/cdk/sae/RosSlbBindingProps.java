package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a `ALIYUN::SAE::SlbBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.354Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosSlbBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosSlbBindingProps.Jsii$Proxy.class)
public interface RosSlbBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAppId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInternet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInternetSlbId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIntranet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIntranetSlbId() {
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
        private java.lang.String appId;
        private java.lang.String internet;
        private java.lang.String internetSlbId;
        private java.lang.String intranet;
        private java.lang.String intranetSlbId;

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
         * Sets the value of {@link RosSlbBindingProps#getInternet}
         * @param internet the value to be set.
         * @return {@code this}
         */
        public Builder internet(java.lang.String internet) {
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
         * Sets the value of {@link RosSlbBindingProps#getIntranet}
         * @param intranet the value to be set.
         * @return {@code this}
         */
        public Builder intranet(java.lang.String intranet) {
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
         * Builds the configured instance.
         * @return a new instance of {@link RosSlbBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSlbBindingProps build() {
            return new Jsii$Proxy(appId, internet, internetSlbId, intranet, intranetSlbId);
        }
    }

    /**
     * An implementation for {@link RosSlbBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSlbBindingProps {
        private final java.lang.String appId;
        private final java.lang.String internet;
        private final java.lang.String internetSlbId;
        private final java.lang.String intranet;
        private final java.lang.String intranetSlbId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internet = software.amazon.jsii.Kernel.get(this, "internet", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetSlbId = software.amazon.jsii.Kernel.get(this, "internetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.intranet = software.amazon.jsii.Kernel.get(this, "intranet", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.intranetSlbId = software.amazon.jsii.Kernel.get(this, "intranetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String appId, final java.lang.String internet, final java.lang.String internetSlbId, final java.lang.String intranet, final java.lang.String intranetSlbId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(appId, "appId is required");
            this.internet = internet;
            this.internetSlbId = internetSlbId;
            this.intranet = intranet;
            this.intranetSlbId = intranetSlbId;
        }

        @Override
        public final java.lang.String getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.String getInternet() {
            return this.internet;
        }

        @Override
        public final java.lang.String getInternetSlbId() {
            return this.internetSlbId;
        }

        @Override
        public final java.lang.String getIntranet() {
            return this.intranet;
        }

        @Override
        public final java.lang.String getIntranetSlbId() {
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
