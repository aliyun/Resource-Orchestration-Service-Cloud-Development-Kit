package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>CustomList</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.444Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CustomListProps")
@software.amazon.jsii.Jsii.Proxy(CustomListProps.Jsii$Proxy.class)
public interface CustomListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property items: The items in the custom list, which are displayed as an array.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getItems();

    /**
     * Property kind: The type of the custom list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKind();

    /**
     * Property listName: The name of the custom list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListName();

    /**
     * Property description: The description of the custom list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomListProps> {
        java.lang.Object items;
        java.lang.Object kind;
        java.lang.Object listName;
        java.lang.Object description;

        /**
         * Sets the value of {@link CustomListProps#getItems}
         * @param items Property items: The items in the custom list, which are displayed as an array. This parameter is required.
         * @return {@code this}
         */
        public Builder items(com.aliyun.ros.cdk.core.IResolvable items) {
            this.items = items;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getItems}
         * @param items Property items: The items in the custom list, which are displayed as an array. This parameter is required.
         * @return {@code this}
         */
        public Builder items(java.util.List<? extends java.lang.Object> items) {
            this.items = items;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getKind}
         * @param kind Property kind: The type of the custom list. This parameter is required.
         * @return {@code this}
         */
        public Builder kind(java.lang.String kind) {
            this.kind = kind;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getKind}
         * @param kind Property kind: The type of the custom list. This parameter is required.
         * @return {@code this}
         */
        public Builder kind(com.aliyun.ros.cdk.core.IResolvable kind) {
            this.kind = kind;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getListName}
         * @param listName Property listName: The name of the custom list. This parameter is required.
         * @return {@code this}
         */
        public Builder listName(java.lang.String listName) {
            this.listName = listName;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getListName}
         * @param listName Property listName: The name of the custom list. This parameter is required.
         * @return {@code this}
         */
        public Builder listName(com.aliyun.ros.cdk.core.IResolvable listName) {
            this.listName = listName;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getDescription}
         * @param description Property description: The description of the custom list.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomListProps#getDescription}
         * @param description Property description: The description of the custom list.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomListProps {
        private final java.lang.Object items;
        private final java.lang.Object kind;
        private final java.lang.Object listName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.items = software.amazon.jsii.Kernel.get(this, "items", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kind = software.amazon.jsii.Kernel.get(this, "kind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listName = software.amazon.jsii.Kernel.get(this, "listName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.items = java.util.Objects.requireNonNull(builder.items, "items is required");
            this.kind = java.util.Objects.requireNonNull(builder.kind, "kind is required");
            this.listName = java.util.Objects.requireNonNull(builder.listName, "listName is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getItems() {
            return this.items;
        }

        @Override
        public final java.lang.Object getKind() {
            return this.kind;
        }

        @Override
        public final java.lang.Object getListName() {
            return this.listName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("items", om.valueToTree(this.getItems()));
            data.set("kind", om.valueToTree(this.getKind()));
            data.set("listName", om.valueToTree(this.getListName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.CustomListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomListProps.Jsii$Proxy that = (CustomListProps.Jsii$Proxy) o;

            if (!items.equals(that.items)) return false;
            if (!kind.equals(that.kind)) return false;
            if (!listName.equals(that.listName)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.items.hashCode();
            result = 31 * result + (this.kind.hashCode());
            result = 31 * result + (this.listName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
