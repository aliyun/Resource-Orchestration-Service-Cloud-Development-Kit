package com.aliyun.ros.cdk.datalakeformation;

/**
 * Properties for defining a <code>RosCatalog</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datalakeformation.$Module.class, fqn = "@alicloud/ros-cdk-datalakeformation.RosCatalogProps")
@software.amazon.jsii.Jsii.Proxy(RosCatalogProps.Jsii$Proxy.class)
public interface RosCatalogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsShared() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShareId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
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
        java.lang.Object name;
        java.lang.Object isShared;
        java.lang.Object options;
        java.lang.Object shareId;
        java.lang.Object type;

        /**
         * Sets the value of {@link RosCatalogProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getIsShared}
         * @param isShared the value to be set.
         * @return {@code this}
         */
        public Builder isShared(java.lang.Boolean isShared) {
            this.isShared = isShared;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getIsShared}
         * @param isShared the value to be set.
         * @return {@code this}
         */
        public Builder isShared(com.aliyun.ros.cdk.core.IResolvable isShared) {
            this.isShared = isShared;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(java.util.Map<java.lang.String, ? extends java.lang.Object> options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getShareId}
         * @param shareId the value to be set.
         * @return {@code this}
         */
        public Builder shareId(java.lang.String shareId) {
            this.shareId = shareId;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getShareId}
         * @param shareId the value to be set.
         * @return {@code this}
         */
        public Builder shareId(com.aliyun.ros.cdk.core.IResolvable shareId) {
            this.shareId = shareId;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosCatalogProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
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
        private final java.lang.Object name;
        private final java.lang.Object isShared;
        private final java.lang.Object options;
        private final java.lang.Object shareId;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isShared = software.amazon.jsii.Kernel.get(this, "isShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shareId = software.amazon.jsii.Kernel.get(this, "shareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.isShared = builder.isShared;
            this.options = builder.options;
            this.shareId = builder.shareId;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getIsShared() {
            return this.isShared;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getShareId() {
            return this.shareId;
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

            data.set("name", om.valueToTree(this.getName()));
            if (this.getIsShared() != null) {
                data.set("isShared", om.valueToTree(this.getIsShared()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getShareId() != null) {
                data.set("shareId", om.valueToTree(this.getShareId()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-datalakeformation.RosCatalogProps"));
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

            if (!name.equals(that.name)) return false;
            if (this.isShared != null ? !this.isShared.equals(that.isShared) : that.isShared != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.shareId != null ? !this.shareId.equals(that.shareId) : that.shareId != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.isShared != null ? this.isShared.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.shareId != null ? this.shareId.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
