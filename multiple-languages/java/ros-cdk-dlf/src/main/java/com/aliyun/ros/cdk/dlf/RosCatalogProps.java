package com.aliyun.ros.cdk.dlf;

/**
 * Properties for defining a <code>ALIYUN::DLF::Catalog</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:24.635Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dlf.$Module.class, fqn = "@alicloud/ros-cdk-dlf.RosCatalogProps")
@software.amazon.jsii.Jsii.Proxy(RosCatalogProps.Jsii$Proxy.class)
public interface RosCatalogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCatalogId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocationUri() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOwner() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCatalogProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCatalogProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCatalogProps> {
        java.lang.Object catalogId;
        java.lang.Object description;
        java.lang.Object locationUri;
        java.lang.Object owner;

        /**
         * Sets the value of {@link RosCatalogProps#getCatalogId}
         * @param catalogId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder catalogId(java.lang.String catalogId) {
            this.catalogId = catalogId;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getCatalogId}
         * @param catalogId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder catalogId(com.aliyun.ros.cdk.core.IResolvable catalogId) {
            this.catalogId = catalogId;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getLocationUri}
         * @param locationUri the value to be set.
         * @return {@code this}
         */
        public Builder locationUri(java.lang.String locationUri) {
            this.locationUri = locationUri;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getLocationUri}
         * @param locationUri the value to be set.
         * @return {@code this}
         */
        public Builder locationUri(com.aliyun.ros.cdk.core.IResolvable locationUri) {
            this.locationUri = locationUri;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getOwner}
         * @param owner the value to be set.
         * @return {@code this}
         */
        public Builder owner(java.lang.String owner) {
            this.owner = owner;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getOwner}
         * @param owner the value to be set.
         * @return {@code this}
         */
        public Builder owner(com.aliyun.ros.cdk.core.IResolvable owner) {
            this.owner = owner;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCatalogProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCatalogProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCatalogProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCatalogProps {
        private final java.lang.Object catalogId;
        private final java.lang.Object description;
        private final java.lang.Object locationUri;
        private final java.lang.Object owner;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.catalogId = software.amazon.jsii.Kernel.get(this, "catalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.locationUri = software.amazon.jsii.Kernel.get(this, "locationUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.owner = software.amazon.jsii.Kernel.get(this, "owner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.catalogId = java.util.Objects.requireNonNull(builder.catalogId, "catalogId is required");
            this.description = builder.description;
            this.locationUri = builder.locationUri;
            this.owner = builder.owner;
        }

        @Override
        public final java.lang.Object getCatalogId() {
            return this.catalogId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLocationUri() {
            return this.locationUri;
        }

        @Override
        public final java.lang.Object getOwner() {
            return this.owner;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("catalogId", om.valueToTree(this.getCatalogId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLocationUri() != null) {
                data.set("locationUri", om.valueToTree(this.getLocationUri()));
            }
            if (this.getOwner() != null) {
                data.set("owner", om.valueToTree(this.getOwner()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dlf.RosCatalogProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCatalogProps.Jsii$Proxy that = (RosCatalogProps.Jsii$Proxy) o;

            if (!catalogId.equals(that.catalogId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.locationUri != null ? !this.locationUri.equals(that.locationUri) : that.locationUri != null) return false;
            return this.owner != null ? this.owner.equals(that.owner) : that.owner == null;
        }

        @Override
        public final int hashCode() {
            int result = this.catalogId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.locationUri != null ? this.locationUri.hashCode() : 0);
            result = 31 * result + (this.owner != null ? this.owner.hashCode() : 0);
            return result;
        }
    }
}
