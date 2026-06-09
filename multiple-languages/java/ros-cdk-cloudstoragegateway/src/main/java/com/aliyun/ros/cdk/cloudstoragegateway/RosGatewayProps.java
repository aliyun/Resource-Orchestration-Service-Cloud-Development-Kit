package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * Properties for defining a <code>RosGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:55:20.345Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.RosGatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewayProps.Jsii$Proxy.class)
public interface RosGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocation();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostPaid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicNetworkBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReleaseAfterExpiration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageBundleId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUntrustedEnvId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUntrustedEnvInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGatewayProps> {
        java.lang.Object category;
        java.lang.Object location;
        java.lang.Object name;
        java.lang.Object type;
        java.lang.Object description;
        java.lang.Object gatewayClass;
        java.lang.Object postPaid;
        java.lang.Object publicNetworkBandwidth;
        java.lang.Object releaseAfterExpiration;
        java.lang.Object resourceRegionId;
        java.lang.Object secondaryVSwitchId;
        java.lang.Object storageBundleId;
        java.lang.Object untrustedEnvId;
        java.lang.Object untrustedEnvInstanceType;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link RosGatewayProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getLocation}
         * @param location the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder location(java.lang.String location) {
            this.location = location;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getLocation}
         * @param location the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
            this.location = location;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getGatewayClass}
         * @param gatewayClass the value to be set.
         * @return {@code this}
         */
        public Builder gatewayClass(java.lang.String gatewayClass) {
            this.gatewayClass = gatewayClass;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getGatewayClass}
         * @param gatewayClass the value to be set.
         * @return {@code this}
         */
        public Builder gatewayClass(com.aliyun.ros.cdk.core.IResolvable gatewayClass) {
            this.gatewayClass = gatewayClass;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getPostPaid}
         * @param postPaid the value to be set.
         * @return {@code this}
         */
        public Builder postPaid(java.lang.Boolean postPaid) {
            this.postPaid = postPaid;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getPostPaid}
         * @param postPaid the value to be set.
         * @return {@code this}
         */
        public Builder postPaid(com.aliyun.ros.cdk.core.IResolvable postPaid) {
            this.postPaid = postPaid;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getPublicNetworkBandwidth}
         * @param publicNetworkBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder publicNetworkBandwidth(java.lang.Number publicNetworkBandwidth) {
            this.publicNetworkBandwidth = publicNetworkBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getPublicNetworkBandwidth}
         * @param publicNetworkBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder publicNetworkBandwidth(com.aliyun.ros.cdk.core.IResolvable publicNetworkBandwidth) {
            this.publicNetworkBandwidth = publicNetworkBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getReleaseAfterExpiration}
         * @param releaseAfterExpiration the value to be set.
         * @return {@code this}
         */
        public Builder releaseAfterExpiration(java.lang.Boolean releaseAfterExpiration) {
            this.releaseAfterExpiration = releaseAfterExpiration;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getReleaseAfterExpiration}
         * @param releaseAfterExpiration the value to be set.
         * @return {@code this}
         */
        public Builder releaseAfterExpiration(com.aliyun.ros.cdk.core.IResolvable releaseAfterExpiration) {
            this.releaseAfterExpiration = releaseAfterExpiration;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getResourceRegionId}
         * @param resourceRegionId the value to be set.
         * @return {@code this}
         */
        public Builder resourceRegionId(java.lang.String resourceRegionId) {
            this.resourceRegionId = resourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getResourceRegionId}
         * @param resourceRegionId the value to be set.
         * @return {@code this}
         */
        public Builder resourceRegionId(com.aliyun.ros.cdk.core.IResolvable resourceRegionId) {
            this.resourceRegionId = resourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSecondaryVSwitchId}
         * @param secondaryVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder secondaryVSwitchId(java.lang.String secondaryVSwitchId) {
            this.secondaryVSwitchId = secondaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSecondaryVSwitchId}
         * @param secondaryVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder secondaryVSwitchId(com.aliyun.ros.cdk.core.IResolvable secondaryVSwitchId) {
            this.secondaryVSwitchId = secondaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getStorageBundleId}
         * @param storageBundleId the value to be set.
         * @return {@code this}
         */
        public Builder storageBundleId(java.lang.String storageBundleId) {
            this.storageBundleId = storageBundleId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getStorageBundleId}
         * @param storageBundleId the value to be set.
         * @return {@code this}
         */
        public Builder storageBundleId(com.aliyun.ros.cdk.core.IResolvable storageBundleId) {
            this.storageBundleId = storageBundleId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getUntrustedEnvId}
         * @param untrustedEnvId the value to be set.
         * @return {@code this}
         */
        public Builder untrustedEnvId(java.lang.String untrustedEnvId) {
            this.untrustedEnvId = untrustedEnvId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getUntrustedEnvId}
         * @param untrustedEnvId the value to be set.
         * @return {@code this}
         */
        public Builder untrustedEnvId(com.aliyun.ros.cdk.core.IResolvable untrustedEnvId) {
            this.untrustedEnvId = untrustedEnvId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getUntrustedEnvInstanceType}
         * @param untrustedEnvInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder untrustedEnvInstanceType(java.lang.String untrustedEnvInstanceType) {
            this.untrustedEnvInstanceType = untrustedEnvInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getUntrustedEnvInstanceType}
         * @param untrustedEnvInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder untrustedEnvInstanceType(com.aliyun.ros.cdk.core.IResolvable untrustedEnvInstanceType) {
            this.untrustedEnvInstanceType = untrustedEnvInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGatewayProps {
        private final java.lang.Object category;
        private final java.lang.Object location;
        private final java.lang.Object name;
        private final java.lang.Object type;
        private final java.lang.Object description;
        private final java.lang.Object gatewayClass;
        private final java.lang.Object postPaid;
        private final java.lang.Object publicNetworkBandwidth;
        private final java.lang.Object releaseAfterExpiration;
        private final java.lang.Object resourceRegionId;
        private final java.lang.Object secondaryVSwitchId;
        private final java.lang.Object storageBundleId;
        private final java.lang.Object untrustedEnvId;
        private final java.lang.Object untrustedEnvInstanceType;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayClass = software.amazon.jsii.Kernel.get(this, "gatewayClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postPaid = software.amazon.jsii.Kernel.get(this, "postPaid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicNetworkBandwidth = software.amazon.jsii.Kernel.get(this, "publicNetworkBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releaseAfterExpiration = software.amazon.jsii.Kernel.get(this, "releaseAfterExpiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceRegionId = software.amazon.jsii.Kernel.get(this, "resourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryVSwitchId = software.amazon.jsii.Kernel.get(this, "secondaryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageBundleId = software.amazon.jsii.Kernel.get(this, "storageBundleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.untrustedEnvId = software.amazon.jsii.Kernel.get(this, "untrustedEnvId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.untrustedEnvInstanceType = software.amazon.jsii.Kernel.get(this, "untrustedEnvInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
            this.location = java.util.Objects.requireNonNull(builder.location, "location is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.description = builder.description;
            this.gatewayClass = builder.gatewayClass;
            this.postPaid = builder.postPaid;
            this.publicNetworkBandwidth = builder.publicNetworkBandwidth;
            this.releaseAfterExpiration = builder.releaseAfterExpiration;
            this.resourceRegionId = builder.resourceRegionId;
            this.secondaryVSwitchId = builder.secondaryVSwitchId;
            this.storageBundleId = builder.storageBundleId;
            this.untrustedEnvId = builder.untrustedEnvId;
            this.untrustedEnvInstanceType = builder.untrustedEnvInstanceType;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getLocation() {
            return this.location;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getGatewayClass() {
            return this.gatewayClass;
        }

        @Override
        public final java.lang.Object getPostPaid() {
            return this.postPaid;
        }

        @Override
        public final java.lang.Object getPublicNetworkBandwidth() {
            return this.publicNetworkBandwidth;
        }

        @Override
        public final java.lang.Object getReleaseAfterExpiration() {
            return this.releaseAfterExpiration;
        }

        @Override
        public final java.lang.Object getResourceRegionId() {
            return this.resourceRegionId;
        }

        @Override
        public final java.lang.Object getSecondaryVSwitchId() {
            return this.secondaryVSwitchId;
        }

        @Override
        public final java.lang.Object getStorageBundleId() {
            return this.storageBundleId;
        }

        @Override
        public final java.lang.Object getUntrustedEnvId() {
            return this.untrustedEnvId;
        }

        @Override
        public final java.lang.Object getUntrustedEnvInstanceType() {
            return this.untrustedEnvInstanceType;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("category", om.valueToTree(this.getCategory()));
            data.set("location", om.valueToTree(this.getLocation()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getGatewayClass() != null) {
                data.set("gatewayClass", om.valueToTree(this.getGatewayClass()));
            }
            if (this.getPostPaid() != null) {
                data.set("postPaid", om.valueToTree(this.getPostPaid()));
            }
            if (this.getPublicNetworkBandwidth() != null) {
                data.set("publicNetworkBandwidth", om.valueToTree(this.getPublicNetworkBandwidth()));
            }
            if (this.getReleaseAfterExpiration() != null) {
                data.set("releaseAfterExpiration", om.valueToTree(this.getReleaseAfterExpiration()));
            }
            if (this.getResourceRegionId() != null) {
                data.set("resourceRegionId", om.valueToTree(this.getResourceRegionId()));
            }
            if (this.getSecondaryVSwitchId() != null) {
                data.set("secondaryVSwitchId", om.valueToTree(this.getSecondaryVSwitchId()));
            }
            if (this.getStorageBundleId() != null) {
                data.set("storageBundleId", om.valueToTree(this.getStorageBundleId()));
            }
            if (this.getUntrustedEnvId() != null) {
                data.set("untrustedEnvId", om.valueToTree(this.getUntrustedEnvId()));
            }
            if (this.getUntrustedEnvInstanceType() != null) {
                data.set("untrustedEnvInstanceType", om.valueToTree(this.getUntrustedEnvInstanceType()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudstoragegateway.RosGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGatewayProps.Jsii$Proxy that = (RosGatewayProps.Jsii$Proxy) o;

            if (!category.equals(that.category)) return false;
            if (!location.equals(that.location)) return false;
            if (!name.equals(that.name)) return false;
            if (!type.equals(that.type)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.gatewayClass != null ? !this.gatewayClass.equals(that.gatewayClass) : that.gatewayClass != null) return false;
            if (this.postPaid != null ? !this.postPaid.equals(that.postPaid) : that.postPaid != null) return false;
            if (this.publicNetworkBandwidth != null ? !this.publicNetworkBandwidth.equals(that.publicNetworkBandwidth) : that.publicNetworkBandwidth != null) return false;
            if (this.releaseAfterExpiration != null ? !this.releaseAfterExpiration.equals(that.releaseAfterExpiration) : that.releaseAfterExpiration != null) return false;
            if (this.resourceRegionId != null ? !this.resourceRegionId.equals(that.resourceRegionId) : that.resourceRegionId != null) return false;
            if (this.secondaryVSwitchId != null ? !this.secondaryVSwitchId.equals(that.secondaryVSwitchId) : that.secondaryVSwitchId != null) return false;
            if (this.storageBundleId != null ? !this.storageBundleId.equals(that.storageBundleId) : that.storageBundleId != null) return false;
            if (this.untrustedEnvId != null ? !this.untrustedEnvId.equals(that.untrustedEnvId) : that.untrustedEnvId != null) return false;
            if (this.untrustedEnvInstanceType != null ? !this.untrustedEnvInstanceType.equals(that.untrustedEnvInstanceType) : that.untrustedEnvInstanceType != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category.hashCode();
            result = 31 * result + (this.location.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.gatewayClass != null ? this.gatewayClass.hashCode() : 0);
            result = 31 * result + (this.postPaid != null ? this.postPaid.hashCode() : 0);
            result = 31 * result + (this.publicNetworkBandwidth != null ? this.publicNetworkBandwidth.hashCode() : 0);
            result = 31 * result + (this.releaseAfterExpiration != null ? this.releaseAfterExpiration.hashCode() : 0);
            result = 31 * result + (this.resourceRegionId != null ? this.resourceRegionId.hashCode() : 0);
            result = 31 * result + (this.secondaryVSwitchId != null ? this.secondaryVSwitchId.hashCode() : 0);
            result = 31 * result + (this.storageBundleId != null ? this.storageBundleId.hashCode() : 0);
            result = 31 * result + (this.untrustedEnvId != null ? this.untrustedEnvId.hashCode() : 0);
            result = 31 * result + (this.untrustedEnvInstanceType != null ? this.untrustedEnvInstanceType.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
