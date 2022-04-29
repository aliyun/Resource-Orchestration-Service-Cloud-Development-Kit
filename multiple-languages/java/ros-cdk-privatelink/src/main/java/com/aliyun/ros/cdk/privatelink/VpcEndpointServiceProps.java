package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:29.930Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps")
@software.amazon.jsii.Jsii.Proxy(VpcEndpointServiceProps.Jsii$Proxy.class)
public interface VpcEndpointServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
     * <p>
     * Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAcceptEnabled() {
        return null;
    }

    /**
     * Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
     * <p>
     * Valid values: 100 to 1024. Unit: Mbit/s.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectBandwidth() {
        return null;
    }

    /**
     * Property payer: The payer of the endpoint service.
     * <p>
     * Valid values:
     * Endpoint: the service consumer.
     * EndpointService: the service provider.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayer() {
        return null;
    }

    /**
     * Property resource:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResource() {
        return null;
    }

    /**
     * Property serviceDescription: The description for the endpoint service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceDescription() {
        return null;
    }

    /**
     * Property user: Account IDs to the whitelist of an endpoint service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUser() {
        return null;
    }

    /**
     * Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * <p>
     * true: yes.
     * false (default): no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneAffinityEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcEndpointServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcEndpointServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcEndpointServiceProps> {
        java.lang.Object autoAcceptEnabled;
        java.lang.Object connectBandwidth;
        java.lang.Object payer;
        java.lang.Object resource;
        java.lang.Object serviceDescription;
        java.lang.Object user;
        java.lang.Object zoneAffinityEnabled;

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getAutoAcceptEnabled}
         * @param autoAcceptEnabled Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
         *                          Valid values:
         *                          true: automatically accepts endpoint connection requests.
         *                          false: does not automatically accept endpoint connection requests.
         * @return {@code this}
         */
        public Builder autoAcceptEnabled(java.lang.Boolean autoAcceptEnabled) {
            this.autoAcceptEnabled = autoAcceptEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getAutoAcceptEnabled}
         * @param autoAcceptEnabled Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
         *                          Valid values:
         *                          true: automatically accepts endpoint connection requests.
         *                          false: does not automatically accept endpoint connection requests.
         * @return {@code this}
         */
        public Builder autoAcceptEnabled(com.aliyun.ros.cdk.core.IResolvable autoAcceptEnabled) {
            this.autoAcceptEnabled = autoAcceptEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getConnectBandwidth}
         * @param connectBandwidth Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
         *                         Valid values: 100 to 1024. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder connectBandwidth(java.lang.Number connectBandwidth) {
            this.connectBandwidth = connectBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getConnectBandwidth}
         * @param connectBandwidth Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
         *                         Valid values: 100 to 1024. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder connectBandwidth(com.aliyun.ros.cdk.core.IResolvable connectBandwidth) {
            this.connectBandwidth = connectBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getPayer}
         * @param payer Property payer: The payer of the endpoint service.
         *              Valid values:
         *              Endpoint: the service consumer.
         *              EndpointService: the service provider.
         * @return {@code this}
         */
        public Builder payer(java.lang.String payer) {
            this.payer = payer;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getPayer}
         * @param payer Property payer: The payer of the endpoint service.
         *              Valid values:
         *              Endpoint: the service consumer.
         *              EndpointService: the service provider.
         * @return {@code this}
         */
        public Builder payer(com.aliyun.ros.cdk.core.IResolvable payer) {
            this.payer = payer;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getResource}
         * @param resource Property resource:.
         * @return {@code this}
         */
        public Builder resource(com.aliyun.ros.cdk.core.IResolvable resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getResource}
         * @param resource Property resource:.
         * @return {@code this}
         */
        public Builder resource(java.util.List<? extends java.lang.Object> resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getServiceDescription}
         * @param serviceDescription Property serviceDescription: The description for the endpoint service.
         * @return {@code this}
         */
        public Builder serviceDescription(java.lang.String serviceDescription) {
            this.serviceDescription = serviceDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getServiceDescription}
         * @param serviceDescription Property serviceDescription: The description for the endpoint service.
         * @return {@code this}
         */
        public Builder serviceDescription(com.aliyun.ros.cdk.core.IResolvable serviceDescription) {
            this.serviceDescription = serviceDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getUser}
         * @param user Property user: Account IDs to the whitelist of an endpoint service.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.core.IResolvable user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getUser}
         * @param user Property user: Account IDs to the whitelist of an endpoint service.
         * @return {@code this}
         */
        public Builder user(java.util.List<? extends java.lang.Object> user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getZoneAffinityEnabled}
         * @param zoneAffinityEnabled Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
         *                            true: yes.
         *                            false (default): no
         * @return {@code this}
         */
        public Builder zoneAffinityEnabled(java.lang.Boolean zoneAffinityEnabled) {
            this.zoneAffinityEnabled = zoneAffinityEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getZoneAffinityEnabled}
         * @param zoneAffinityEnabled Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
         *                            true: yes.
         *                            false (default): no
         * @return {@code this}
         */
        public Builder zoneAffinityEnabled(com.aliyun.ros.cdk.core.IResolvable zoneAffinityEnabled) {
            this.zoneAffinityEnabled = zoneAffinityEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcEndpointServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcEndpointServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcEndpointServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcEndpointServiceProps {
        private final java.lang.Object autoAcceptEnabled;
        private final java.lang.Object connectBandwidth;
        private final java.lang.Object payer;
        private final java.lang.Object resource;
        private final java.lang.Object serviceDescription;
        private final java.lang.Object user;
        private final java.lang.Object zoneAffinityEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoAcceptEnabled = software.amazon.jsii.Kernel.get(this, "autoAcceptEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectBandwidth = software.amazon.jsii.Kernel.get(this, "connectBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payer = software.amazon.jsii.Kernel.get(this, "payer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resource = software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceDescription = software.amazon.jsii.Kernel.get(this, "serviceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneAffinityEnabled = software.amazon.jsii.Kernel.get(this, "zoneAffinityEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoAcceptEnabled = builder.autoAcceptEnabled;
            this.connectBandwidth = builder.connectBandwidth;
            this.payer = builder.payer;
            this.resource = builder.resource;
            this.serviceDescription = builder.serviceDescription;
            this.user = builder.user;
            this.zoneAffinityEnabled = builder.zoneAffinityEnabled;
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
        public final java.lang.Object getPayer() {
            return this.payer;
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
        public final java.lang.Object getZoneAffinityEnabled() {
            return this.zoneAffinityEnabled;
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
            if (this.getPayer() != null) {
                data.set("payer", om.valueToTree(this.getPayer()));
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
            if (this.getZoneAffinityEnabled() != null) {
                data.set("zoneAffinityEnabled", om.valueToTree(this.getZoneAffinityEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcEndpointServiceProps.Jsii$Proxy that = (VpcEndpointServiceProps.Jsii$Proxy) o;

            if (this.autoAcceptEnabled != null ? !this.autoAcceptEnabled.equals(that.autoAcceptEnabled) : that.autoAcceptEnabled != null) return false;
            if (this.connectBandwidth != null ? !this.connectBandwidth.equals(that.connectBandwidth) : that.connectBandwidth != null) return false;
            if (this.payer != null ? !this.payer.equals(that.payer) : that.payer != null) return false;
            if (this.resource != null ? !this.resource.equals(that.resource) : that.resource != null) return false;
            if (this.serviceDescription != null ? !this.serviceDescription.equals(that.serviceDescription) : that.serviceDescription != null) return false;
            if (this.user != null ? !this.user.equals(that.user) : that.user != null) return false;
            return this.zoneAffinityEnabled != null ? this.zoneAffinityEnabled.equals(that.zoneAffinityEnabled) : that.zoneAffinityEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoAcceptEnabled != null ? this.autoAcceptEnabled.hashCode() : 0;
            result = 31 * result + (this.connectBandwidth != null ? this.connectBandwidth.hashCode() : 0);
            result = 31 * result + (this.payer != null ? this.payer.hashCode() : 0);
            result = 31 * result + (this.resource != null ? this.resource.hashCode() : 0);
            result = 31 * result + (this.serviceDescription != null ? this.serviceDescription.hashCode() : 0);
            result = 31 * result + (this.user != null ? this.user.hashCode() : 0);
            result = 31 * result + (this.zoneAffinityEnabled != null ? this.zoneAffinityEnabled.hashCode() : 0);
            return result;
        }
    }
}
