package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::PrefixList`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:28.746Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.PrefixListProps")
@software.amazon.jsii.Jsii.Proxy(PrefixListProps.Jsii$Proxy.class)
public interface PrefixListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addressFamily: The IP address family.
     * <p>
     * Valid values: IPv4 IPv6
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddressFamily();

    /**
     * Property maxEntries: The maximum number of entries that the prefix list can contain.
     * <p>
     * Valid values: 1 to 200.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxEntries();

    /**
     * Property prefixListName: The name of the prefix.
     * <p>
     * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrefixListName();

    /**
     * Property description: The description of the prefix list.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property entries:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntries() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrefixListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrefixListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrefixListProps> {
        java.lang.Object addressFamily;
        java.lang.Object maxEntries;
        java.lang.Object prefixListName;
        java.lang.Object description;
        java.lang.Object entries;

        /**
         * Sets the value of {@link PrefixListProps#getAddressFamily}
         * @param addressFamily Property addressFamily: The IP address family. This parameter is required.
         *                      Valid values: IPv4 IPv6
         * @return {@code this}
         */
        public Builder addressFamily(java.lang.String addressFamily) {
            this.addressFamily = addressFamily;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getAddressFamily}
         * @param addressFamily Property addressFamily: The IP address family. This parameter is required.
         *                      Valid values: IPv4 IPv6
         * @return {@code this}
         */
        public Builder addressFamily(com.aliyun.ros.cdk.core.IResolvable addressFamily) {
            this.addressFamily = addressFamily;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getMaxEntries}
         * @param maxEntries Property maxEntries: The maximum number of entries that the prefix list can contain. This parameter is required.
         *                   Valid values: 1 to 200.
         * @return {@code this}
         */
        public Builder maxEntries(java.lang.Number maxEntries) {
            this.maxEntries = maxEntries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getMaxEntries}
         * @param maxEntries Property maxEntries: The maximum number of entries that the prefix list can contain. This parameter is required.
         *                   Valid values: 1 to 200.
         * @return {@code this}
         */
        public Builder maxEntries(com.aliyun.ros.cdk.core.IResolvable maxEntries) {
            this.maxEntries = maxEntries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getPrefixListName}
         * @param prefixListName Property prefixListName: The name of the prefix. This parameter is required.
         *                       The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * @return {@code this}
         */
        public Builder prefixListName(java.lang.String prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getPrefixListName}
         * @param prefixListName Property prefixListName: The name of the prefix. This parameter is required.
         *                       The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * @return {@code this}
         */
        public Builder prefixListName(com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getDescription}
         * @param description Property description: The description of the prefix list.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getDescription}
         * @param description Property description: The description of the prefix list.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getEntries}
         * @param entries Property entries:.
         * @return {@code this}
         */
        public Builder entries(com.aliyun.ros.cdk.core.IResolvable entries) {
            this.entries = entries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getEntries}
         * @param entries Property entries:.
         * @return {@code this}
         */
        public Builder entries(java.util.List<? extends java.lang.Object> entries) {
            this.entries = entries;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrefixListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrefixListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrefixListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrefixListProps {
        private final java.lang.Object addressFamily;
        private final java.lang.Object maxEntries;
        private final java.lang.Object prefixListName;
        private final java.lang.Object description;
        private final java.lang.Object entries;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressFamily = software.amazon.jsii.Kernel.get(this, "addressFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxEntries = software.amazon.jsii.Kernel.get(this, "maxEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prefixListName = software.amazon.jsii.Kernel.get(this, "prefixListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.entries = software.amazon.jsii.Kernel.get(this, "entries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressFamily = java.util.Objects.requireNonNull(builder.addressFamily, "addressFamily is required");
            this.maxEntries = java.util.Objects.requireNonNull(builder.maxEntries, "maxEntries is required");
            this.prefixListName = java.util.Objects.requireNonNull(builder.prefixListName, "prefixListName is required");
            this.description = builder.description;
            this.entries = builder.entries;
        }

        @Override
        public final java.lang.Object getAddressFamily() {
            return this.addressFamily;
        }

        @Override
        public final java.lang.Object getMaxEntries() {
            return this.maxEntries;
        }

        @Override
        public final java.lang.Object getPrefixListName() {
            return this.prefixListName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEntries() {
            return this.entries;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addressFamily", om.valueToTree(this.getAddressFamily()));
            data.set("maxEntries", om.valueToTree(this.getMaxEntries()));
            data.set("prefixListName", om.valueToTree(this.getPrefixListName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEntries() != null) {
                data.set("entries", om.valueToTree(this.getEntries()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.PrefixListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrefixListProps.Jsii$Proxy that = (PrefixListProps.Jsii$Proxy) o;

            if (!addressFamily.equals(that.addressFamily)) return false;
            if (!maxEntries.equals(that.maxEntries)) return false;
            if (!prefixListName.equals(that.prefixListName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.entries != null ? this.entries.equals(that.entries) : that.entries == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressFamily.hashCode();
            result = 31 * result + (this.maxEntries.hashCode());
            result = 31 * result + (this.prefixListName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.entries != null ? this.entries.hashCode() : 0);
            return result;
        }
    }
}
