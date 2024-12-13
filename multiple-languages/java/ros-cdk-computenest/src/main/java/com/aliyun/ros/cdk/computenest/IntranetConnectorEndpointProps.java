package com.aliyun.ros.cdk.computenest;

/**
 * Properties for defining a <code>IntranetConnectorEndpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:05.801Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.IntranetConnectorEndpointProps")
@software.amazon.jsii.Jsii.Proxy(IntranetConnectorEndpointProps.Jsii$Proxy.class)
public interface IntranetConnectorEndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endpointRegionId: The region ID of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointRegionId();

    /**
     * Property vpcId: The ID of the VPC to which the endpoint belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property description: The description of the endpoint, supporting full character set.
     * <p>
     * The length must not exceed 500 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enablePrivateZone: Whether to enable the private zone.
     * <p>
     * This parameter is only valid when the access point type is Managed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnablePrivateZone() {
        return null;
    }

    /**
     * Property name: The name of the endpoint, supporting full character set except space.
     * <p>
     * The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.
     * <p>
     * Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
     * Hosted access points do not require incoming.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceIds() {
        return null;
    }

    /**
     * Property type: The type of the endpoint.
     * <p>
     * <ul>
     * <li>Private (default) : private access point</li>
     * <li>Managed: managed access point.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link IntranetConnectorEndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IntranetConnectorEndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IntranetConnectorEndpointProps> {
        java.lang.Object endpointRegionId;
        java.lang.Object vpcId;
        java.lang.Object description;
        java.lang.Object enablePrivateZone;
        java.lang.Object name;
        java.lang.Object resourceIds;
        java.lang.Object type;

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getEndpointRegionId}
         * @param endpointRegionId Property endpointRegionId: The region ID of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointRegionId(java.lang.String endpointRegionId) {
            this.endpointRegionId = endpointRegionId;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getEndpointRegionId}
         * @param endpointRegionId Property endpointRegionId: The region ID of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointRegionId(com.aliyun.ros.cdk.core.IResolvable endpointRegionId) {
            this.endpointRegionId = endpointRegionId;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the endpoint belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the endpoint belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getDescription}
         * @param description Property description: The description of the endpoint, supporting full character set.
         *                    The length must not exceed 500 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getDescription}
         * @param description Property description: The description of the endpoint, supporting full character set.
         *                    The length must not exceed 500 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getEnablePrivateZone}
         * @param enablePrivateZone Property enablePrivateZone: Whether to enable the private zone.
         *                          This parameter is only valid when the access point type is Managed.
         * @return {@code this}
         */
        public Builder enablePrivateZone(java.lang.Boolean enablePrivateZone) {
            this.enablePrivateZone = enablePrivateZone;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getEnablePrivateZone}
         * @param enablePrivateZone Property enablePrivateZone: Whether to enable the private zone.
         *                          This parameter is only valid when the access point type is Managed.
         * @return {@code this}
         */
        public Builder enablePrivateZone(com.aliyun.ros.cdk.core.IResolvable enablePrivateZone) {
            this.enablePrivateZone = enablePrivateZone;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getName}
         * @param name Property name: The name of the endpoint, supporting full character set except space.
         *             The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getName}
         * @param name Property name: The name of the endpoint, supporting full character set except space.
         *             The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getResourceIds}
         * @param resourceIds Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.
         *                    Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
         *                    Hosted access points do not require incoming.
         * @return {@code this}
         */
        public Builder resourceIds(com.aliyun.ros.cdk.core.IResolvable resourceIds) {
            this.resourceIds = resourceIds;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getResourceIds}
         * @param resourceIds Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.
         *                    Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
         *                    Hosted access points do not require incoming.
         * @return {@code this}
         */
        public Builder resourceIds(java.util.List<? extends java.lang.Object> resourceIds) {
            this.resourceIds = resourceIds;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getType}
         * @param type Property type: The type of the endpoint.
         *             <ul>
         *             <li>Private (default) : private access point</li>
         *             <li>Managed: managed access point.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link IntranetConnectorEndpointProps#getType}
         * @param type Property type: The type of the endpoint.
         *             <ul>
         *             <li>Private (default) : private access point</li>
         *             <li>Managed: managed access point.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IntranetConnectorEndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IntranetConnectorEndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IntranetConnectorEndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IntranetConnectorEndpointProps {
        private final java.lang.Object endpointRegionId;
        private final java.lang.Object vpcId;
        private final java.lang.Object description;
        private final java.lang.Object enablePrivateZone;
        private final java.lang.Object name;
        private final java.lang.Object resourceIds;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpointRegionId = software.amazon.jsii.Kernel.get(this, "endpointRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enablePrivateZone = software.amazon.jsii.Kernel.get(this, "enablePrivateZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceIds = software.amazon.jsii.Kernel.get(this, "resourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpointRegionId = java.util.Objects.requireNonNull(builder.endpointRegionId, "endpointRegionId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.description = builder.description;
            this.enablePrivateZone = builder.enablePrivateZone;
            this.name = builder.name;
            this.resourceIds = builder.resourceIds;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getEndpointRegionId() {
            return this.endpointRegionId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnablePrivateZone() {
            return this.enablePrivateZone;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getResourceIds() {
            return this.resourceIds;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endpointRegionId", om.valueToTree(this.getEndpointRegionId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnablePrivateZone() != null) {
                data.set("enablePrivateZone", om.valueToTree(this.getEnablePrivateZone()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getResourceIds() != null) {
                data.set("resourceIds", om.valueToTree(this.getResourceIds()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-computenest.IntranetConnectorEndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IntranetConnectorEndpointProps.Jsii$Proxy that = (IntranetConnectorEndpointProps.Jsii$Proxy) o;

            if (!endpointRegionId.equals(that.endpointRegionId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enablePrivateZone != null ? !this.enablePrivateZone.equals(that.enablePrivateZone) : that.enablePrivateZone != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.resourceIds != null ? !this.resourceIds.equals(that.resourceIds) : that.resourceIds != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endpointRegionId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enablePrivateZone != null ? this.enablePrivateZone.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceIds != null ? this.resourceIds.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
