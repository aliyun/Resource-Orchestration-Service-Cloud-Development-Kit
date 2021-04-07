package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.843Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceProps")
@software.amazon.jsii.Jsii.Proxy(RosVpcEndpointServiceProps.Jsii$Proxy.class)
public interface RosVpcEndpointServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAcceptEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUser() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpcEndpointServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpcEndpointServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpcEndpointServiceProps> {
        private java.lang.Object autoAcceptEnabled;
        private java.lang.Object connectBandwidth;
        private java.lang.Object resource;
        private java.lang.Object serviceDescription;
        private java.lang.Object user;

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getAutoAcceptEnabled}
         * @param autoAcceptEnabled the value to be set.
         * @return {@code this}
         */
        public Builder autoAcceptEnabled(java.lang.Boolean autoAcceptEnabled) {
            this.autoAcceptEnabled = autoAcceptEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getAutoAcceptEnabled}
         * @param autoAcceptEnabled the value to be set.
         * @return {@code this}
         */
        public Builder autoAcceptEnabled(com.aliyun.ros.cdk.core.IResolvable autoAcceptEnabled) {
            this.autoAcceptEnabled = autoAcceptEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getConnectBandwidth}
         * @param connectBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder connectBandwidth(java.lang.Number connectBandwidth) {
            this.connectBandwidth = connectBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getConnectBandwidth}
         * @param connectBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder connectBandwidth(com.aliyun.ros.cdk.core.IResolvable connectBandwidth) {
            this.connectBandwidth = connectBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getResource}
         * @param resource the value to be set.
         * @return {@code this}
         */
        public Builder resource(com.aliyun.ros.cdk.core.IResolvable resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getResource}
         * @param resource the value to be set.
         * @return {@code this}
         */
        public Builder resource(java.util.List<? extends java.lang.Object> resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getServiceDescription}
         * @param serviceDescription the value to be set.
         * @return {@code this}
         */
        public Builder serviceDescription(java.lang.String serviceDescription) {
            this.serviceDescription = serviceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getServiceDescription}
         * @param serviceDescription the value to be set.
         * @return {@code this}
         */
        public Builder serviceDescription(com.aliyun.ros.cdk.core.IResolvable serviceDescription) {
            this.serviceDescription = serviceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getUser}
         * @param user the value to be set.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.core.IResolvable user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getUser}
         * @param user the value to be set.
         * @return {@code this}
         */
        public Builder user(java.util.List<? extends java.lang.Object> user) {
            this.user = user;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcEndpointServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcEndpointServiceProps build() {
            return new Jsii$Proxy(autoAcceptEnabled, connectBandwidth, resource, serviceDescription, user);
        }
    }

    /**
     * An implementation for {@link RosVpcEndpointServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcEndpointServiceProps {
        private final java.lang.Object autoAcceptEnabled;
        private final java.lang.Object connectBandwidth;
        private final java.lang.Object resource;
        private final java.lang.Object serviceDescription;
        private final java.lang.Object user;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoAcceptEnabled = software.amazon.jsii.Kernel.get(this, "autoAcceptEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectBandwidth = software.amazon.jsii.Kernel.get(this, "connectBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resource = software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceDescription = software.amazon.jsii.Kernel.get(this, "serviceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object autoAcceptEnabled, final java.lang.Object connectBandwidth, final java.lang.Object resource, final java.lang.Object serviceDescription, final java.lang.Object user) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoAcceptEnabled = autoAcceptEnabled;
            this.connectBandwidth = connectBandwidth;
            this.resource = resource;
            this.serviceDescription = serviceDescription;
            this.user = user;
        }

        @Override
        public final java.lang.Object getAutoAcceptEnabled() {
            return this.autoAcceptEnabled;
        }

        @Override
        public final java.lang.Object getConnectBandwidth() {
            return this.connectBandwidth;
        }

        @Override
        public final java.lang.Object getResource() {
            return this.resource;
        }

        @Override
        public final java.lang.Object getServiceDescription() {
            return this.serviceDescription;
        }

        @Override
        public final java.lang.Object getUser() {
            return this.user;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAutoAcceptEnabled() != null) {
                data.set("autoAcceptEnabled", om.valueToTree(this.getAutoAcceptEnabled()));
            }
            if (this.getConnectBandwidth() != null) {
                data.set("connectBandwidth", om.valueToTree(this.getConnectBandwidth()));
            }
            if (this.getResource() != null) {
                data.set("resource", om.valueToTree(this.getResource()));
            }
            if (this.getServiceDescription() != null) {
                data.set("serviceDescription", om.valueToTree(this.getServiceDescription()));
            }
            if (this.getUser() != null) {
                data.set("user", om.valueToTree(this.getUser()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpcEndpointServiceProps.Jsii$Proxy that = (RosVpcEndpointServiceProps.Jsii$Proxy) o;

            if (this.autoAcceptEnabled != null ? !this.autoAcceptEnabled.equals(that.autoAcceptEnabled) : that.autoAcceptEnabled != null) return false;
            if (this.connectBandwidth != null ? !this.connectBandwidth.equals(that.connectBandwidth) : that.connectBandwidth != null) return false;
            if (this.resource != null ? !this.resource.equals(that.resource) : that.resource != null) return false;
            if (this.serviceDescription != null ? !this.serviceDescription.equals(that.serviceDescription) : that.serviceDescription != null) return false;
            return this.user != null ? this.user.equals(that.user) : that.user == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoAcceptEnabled != null ? this.autoAcceptEnabled.hashCode() : 0;
            result = 31 * result + (this.connectBandwidth != null ? this.connectBandwidth.hashCode() : 0);
            result = 31 * result + (this.resource != null ? this.resource.hashCode() : 0);
            result = 31 * result + (this.serviceDescription != null ? this.serviceDescription.hashCode() : 0);
            result = 31 * result + (this.user != null ? this.user.hashCode() : 0);
            return result;
        }
    }
}
