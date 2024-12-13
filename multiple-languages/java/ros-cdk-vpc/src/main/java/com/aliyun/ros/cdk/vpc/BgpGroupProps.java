package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>BgpGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:12.687Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.BgpGroupProps")
@software.amazon.jsii.Jsii.Proxy(BgpGroupProps.Jsii$Proxy.class)
public interface BgpGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property peerAsn: The AS number of the BGP peer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerAsn();

    /**
     * Property routerId: The ID of the VBR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouterId();

    /**
     * Property authKey: The authentication key of the BGP group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthKey() {
        return null;
    }

    /**
     * Property description: The description of the BGP group.
     * <p>
     * The description must be 2 to 256 characters in length.
     * It must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property ipVersion: The IP version of the BGP group.
     * <p>
     * Valid values: IPv4 and IPv6.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     * Property isFakeAsn: A router that runs BGP typically belongs to only one AS.
     * <p>
     * In some cases, for example,
     * the AS needs to be migrated or is merged with another AS, a new AS number replaces
     * the original one.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsFakeAsn() {
        return null;
    }

    /**
     * Property localAsn: The AS number on the Alibaba Cloud side.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalAsn() {
        return null;
    }

    /**
     * Property name: The name of the BGP group.
     * <p>
     * The name must be 2 to 128 characters in length and can
     * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
     * with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property routeQuota: The upper limit of the BGP neighbor's route entries.
     * <p>
     * Unit: entries, default value: 110.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteQuota() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BgpGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BgpGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BgpGroupProps> {
        java.lang.Object peerAsn;
        java.lang.Object routerId;
        java.lang.Object authKey;
        java.lang.Object description;
        java.lang.Object ipVersion;
        java.lang.Object isFakeAsn;
        java.lang.Object localAsn;
        java.lang.Object name;
        java.lang.Object routeQuota;

        /**
         * Sets the value of {@link BgpGroupProps#getPeerAsn}
         * @param peerAsn Property peerAsn: The AS number of the BGP peer. This parameter is required.
         * @return {@code this}
         */
        public Builder peerAsn(java.lang.Number peerAsn) {
            this.peerAsn = peerAsn;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getPeerAsn}
         * @param peerAsn Property peerAsn: The AS number of the BGP peer. This parameter is required.
         * @return {@code this}
         */
        public Builder peerAsn(com.aliyun.ros.cdk.core.IResolvable peerAsn) {
            this.peerAsn = peerAsn;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getRouterId}
         * @param routerId Property routerId: The ID of the VBR. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getRouterId}
         * @param routerId Property routerId: The ID of the VBR. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getAuthKey}
         * @param authKey Property authKey: The authentication key of the BGP group.
         * @return {@code this}
         */
        public Builder authKey(java.lang.String authKey) {
            this.authKey = authKey;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getAuthKey}
         * @param authKey Property authKey: The authentication key of the BGP group.
         * @return {@code this}
         */
        public Builder authKey(com.aliyun.ros.cdk.core.IResolvable authKey) {
            this.authKey = authKey;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getDescription}
         * @param description Property description: The description of the BGP group.
         *                    The description must be 2 to 256 characters in length.
         *                    It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getDescription}
         * @param description Property description: The description of the BGP group.
         *                    The description must be 2 to 256 characters in length.
         *                    It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version of the BGP group.
         *                  Valid values: IPv4 and IPv6.
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version of the BGP group.
         *                  Valid values: IPv4 and IPv6.
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getIsFakeAsn}
         * @param isFakeAsn Property isFakeAsn: A router that runs BGP typically belongs to only one AS.
         *                  In some cases, for example,
         *                  the AS needs to be migrated or is merged with another AS, a new AS number replaces
         *                  the original one.
         * @return {@code this}
         */
        public Builder isFakeAsn(java.lang.Boolean isFakeAsn) {
            this.isFakeAsn = isFakeAsn;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getIsFakeAsn}
         * @param isFakeAsn Property isFakeAsn: A router that runs BGP typically belongs to only one AS.
         *                  In some cases, for example,
         *                  the AS needs to be migrated or is merged with another AS, a new AS number replaces
         *                  the original one.
         * @return {@code this}
         */
        public Builder isFakeAsn(com.aliyun.ros.cdk.core.IResolvable isFakeAsn) {
            this.isFakeAsn = isFakeAsn;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getLocalAsn}
         * @param localAsn Property localAsn: The AS number on the Alibaba Cloud side.
         * @return {@code this}
         */
        public Builder localAsn(java.lang.Number localAsn) {
            this.localAsn = localAsn;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getLocalAsn}
         * @param localAsn Property localAsn: The AS number on the Alibaba Cloud side.
         * @return {@code this}
         */
        public Builder localAsn(com.aliyun.ros.cdk.core.IResolvable localAsn) {
            this.localAsn = localAsn;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getName}
         * @param name Property name: The name of the BGP group.
         *             The name must be 2 to 128 characters in length and can
         *             contain digits, periods (.), underscores (_), and hyphens (-). The name must start
         *             with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getName}
         * @param name Property name: The name of the BGP group.
         *             The name must be 2 to 128 characters in length and can
         *             contain digits, periods (.), underscores (_), and hyphens (-). The name must start
         *             with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getRouteQuota}
         * @param routeQuota Property routeQuota: The upper limit of the BGP neighbor's route entries.
         *                   Unit: entries, default value: 110.
         * @return {@code this}
         */
        public Builder routeQuota(java.lang.Number routeQuota) {
            this.routeQuota = routeQuota;
            return this;
        }

        /**
         * Sets the value of {@link BgpGroupProps#getRouteQuota}
         * @param routeQuota Property routeQuota: The upper limit of the BGP neighbor's route entries.
         *                   Unit: entries, default value: 110.
         * @return {@code this}
         */
        public Builder routeQuota(com.aliyun.ros.cdk.core.IResolvable routeQuota) {
            this.routeQuota = routeQuota;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BgpGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BgpGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BgpGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BgpGroupProps {
        private final java.lang.Object peerAsn;
        private final java.lang.Object routerId;
        private final java.lang.Object authKey;
        private final java.lang.Object description;
        private final java.lang.Object ipVersion;
        private final java.lang.Object isFakeAsn;
        private final java.lang.Object localAsn;
        private final java.lang.Object name;
        private final java.lang.Object routeQuota;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.peerAsn = software.amazon.jsii.Kernel.get(this, "peerAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authKey = software.amazon.jsii.Kernel.get(this, "authKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isFakeAsn = software.amazon.jsii.Kernel.get(this, "isFakeAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localAsn = software.amazon.jsii.Kernel.get(this, "localAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeQuota = software.amazon.jsii.Kernel.get(this, "routeQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.peerAsn = java.util.Objects.requireNonNull(builder.peerAsn, "peerAsn is required");
            this.routerId = java.util.Objects.requireNonNull(builder.routerId, "routerId is required");
            this.authKey = builder.authKey;
            this.description = builder.description;
            this.ipVersion = builder.ipVersion;
            this.isFakeAsn = builder.isFakeAsn;
            this.localAsn = builder.localAsn;
            this.name = builder.name;
            this.routeQuota = builder.routeQuota;
        }

        @Override
        public final java.lang.Object getPeerAsn() {
            return this.peerAsn;
        }

        @Override
        public final java.lang.Object getRouterId() {
            return this.routerId;
        }

        @Override
        public final java.lang.Object getAuthKey() {
            return this.authKey;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getIsFakeAsn() {
            return this.isFakeAsn;
        }

        @Override
        public final java.lang.Object getLocalAsn() {
            return this.localAsn;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getRouteQuota() {
            return this.routeQuota;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("peerAsn", om.valueToTree(this.getPeerAsn()));
            data.set("routerId", om.valueToTree(this.getRouterId()));
            if (this.getAuthKey() != null) {
                data.set("authKey", om.valueToTree(this.getAuthKey()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getIsFakeAsn() != null) {
                data.set("isFakeAsn", om.valueToTree(this.getIsFakeAsn()));
            }
            if (this.getLocalAsn() != null) {
                data.set("localAsn", om.valueToTree(this.getLocalAsn()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getRouteQuota() != null) {
                data.set("routeQuota", om.valueToTree(this.getRouteQuota()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.BgpGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BgpGroupProps.Jsii$Proxy that = (BgpGroupProps.Jsii$Proxy) o;

            if (!peerAsn.equals(that.peerAsn)) return false;
            if (!routerId.equals(that.routerId)) return false;
            if (this.authKey != null ? !this.authKey.equals(that.authKey) : that.authKey != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.isFakeAsn != null ? !this.isFakeAsn.equals(that.isFakeAsn) : that.isFakeAsn != null) return false;
            if (this.localAsn != null ? !this.localAsn.equals(that.localAsn) : that.localAsn != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.routeQuota != null ? this.routeQuota.equals(that.routeQuota) : that.routeQuota == null;
        }

        @Override
        public final int hashCode() {
            int result = this.peerAsn.hashCode();
            result = 31 * result + (this.routerId.hashCode());
            result = 31 * result + (this.authKey != null ? this.authKey.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.isFakeAsn != null ? this.isFakeAsn.hashCode() : 0);
            result = 31 * result + (this.localAsn != null ? this.localAsn.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.routeQuota != null ? this.routeQuota.hashCode() : 0);
            return result;
        }
    }
}
