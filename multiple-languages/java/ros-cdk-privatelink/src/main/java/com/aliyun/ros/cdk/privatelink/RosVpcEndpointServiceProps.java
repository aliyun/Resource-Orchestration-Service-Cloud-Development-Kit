package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a <code>ALIYUN::PrivateLink::VpcEndpointService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:27.468Z")
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayer() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceResourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUser() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneAffinityEnabled() {
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
        java.lang.Object autoAcceptEnabled;
        java.lang.Object connectBandwidth;
        java.lang.Object payer;
        java.lang.Object resource;
        java.lang.Object serviceDescription;
        java.lang.Object serviceResourceType;
        java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags;
        java.lang.Object user;
        java.lang.Object zoneAffinityEnabled;

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
         * Sets the value of {@link RosVpcEndpointServiceProps#getPayer}
         * @param payer the value to be set.
         * @return {@code this}
         */
        public Builder payer(java.lang.String payer) {
            this.payer = payer;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getPayer}
         * @param payer the value to be set.
         * @return {@code this}
         */
        public Builder payer(com.aliyun.ros.cdk.core.IResolvable payer) {
            this.payer = payer;
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
         * Sets the value of {@link RosVpcEndpointServiceProps#getServiceResourceType}
         * @param serviceResourceType the value to be set.
         * @return {@code this}
         */
        public Builder serviceResourceType(java.lang.String serviceResourceType) {
            this.serviceResourceType = serviceResourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getServiceResourceType}
         * @param serviceResourceType the value to be set.
         * @return {@code this}
         */
        public Builder serviceResourceType(com.aliyun.ros.cdk.core.IResolvable serviceResourceType) {
            this.serviceResourceType = serviceResourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty>)tags;
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
         * Sets the value of {@link RosVpcEndpointServiceProps#getZoneAffinityEnabled}
         * @param zoneAffinityEnabled the value to be set.
         * @return {@code this}
         */
        public Builder zoneAffinityEnabled(java.lang.Boolean zoneAffinityEnabled) {
            this.zoneAffinityEnabled = zoneAffinityEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcEndpointServiceProps#getZoneAffinityEnabled}
         * @param zoneAffinityEnabled the value to be set.
         * @return {@code this}
         */
        public Builder zoneAffinityEnabled(com.aliyun.ros.cdk.core.IResolvable zoneAffinityEnabled) {
            this.zoneAffinityEnabled = zoneAffinityEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcEndpointServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcEndpointServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpcEndpointServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcEndpointServiceProps {
        private final java.lang.Object autoAcceptEnabled;
        private final java.lang.Object connectBandwidth;
        private final java.lang.Object payer;
        private final java.lang.Object resource;
        private final java.lang.Object serviceDescription;
        private final java.lang.Object serviceResourceType;
        private final java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags;
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
            this.serviceResourceType = software.amazon.jsii.Kernel.get(this, "serviceResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty.class)));
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneAffinityEnabled = software.amazon.jsii.Kernel.get(this, "zoneAffinityEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoAcceptEnabled = builder.autoAcceptEnabled;
            this.connectBandwidth = builder.connectBandwidth;
            this.payer = builder.payer;
            this.resource = builder.resource;
            this.serviceDescription = builder.serviceDescription;
            this.serviceResourceType = builder.serviceResourceType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty>)builder.tags;
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
        public final java.lang.Object getServiceResourceType() {
            return this.serviceResourceType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> getTags() {
            return this.tags;
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
            if (this.getServiceResourceType() != null) {
                data.set("serviceResourceType", om.valueToTree(this.getServiceResourceType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUser() != null) {
                data.set("user", om.valueToTree(this.getUser()));
            }
            if (this.getZoneAffinityEnabled() != null) {
                data.set("zoneAffinityEnabled", om.valueToTree(this.getZoneAffinityEnabled()));
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
            if (this.payer != null ? !this.payer.equals(that.payer) : that.payer != null) return false;
            if (this.resource != null ? !this.resource.equals(that.resource) : that.resource != null) return false;
            if (this.serviceDescription != null ? !this.serviceDescription.equals(that.serviceDescription) : that.serviceDescription != null) return false;
            if (this.serviceResourceType != null ? !this.serviceResourceType.equals(that.serviceResourceType) : that.serviceResourceType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
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
            result = 31 * result + (this.serviceResourceType != null ? this.serviceResourceType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.user != null ? this.user.hashCode() : 0);
            result = 31 * result + (this.zoneAffinityEnabled != null ? this.zoneAffinityEnabled.hashCode() : 0);
            return result;
        }
    }
}
