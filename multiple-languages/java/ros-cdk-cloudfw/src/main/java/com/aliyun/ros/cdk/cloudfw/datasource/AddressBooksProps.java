package com.aliyun.ros.cdk.cloudfw.datasource;

/**
 * Properties for defining a <code>AddressBooks</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.954Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.datasource.AddressBooksProps")
@software.amazon.jsii.Jsii.Proxy(AddressBooksProps.Jsii$Proxy.class)
public interface AddressBooksProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupType() {
        return null;
    }

    /**
     * Property lang: The language type of the received message.
     * <p>
     * <ul>
     * <li><strong>zh</strong> (default): Chinese.</li>
     * <li><strong>en</strong>: English.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AddressBooksProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AddressBooksProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AddressBooksProps> {
        java.lang.Object groupType;
        java.lang.Object lang;

        /**
         * Sets the value of {@link AddressBooksProps#getGroupType}
         * @param groupType Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link AddressBooksProps#getGroupType}
         * @param groupType Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link AddressBooksProps#getLang}
         * @param lang Property lang: The language type of the received message.
         *             <ul>
         *             <li><strong>zh</strong> (default): Chinese.</li>
         *             <li><strong>en</strong>: English.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link AddressBooksProps#getLang}
         * @param lang Property lang: The language type of the received message.
         *             <ul>
         *             <li><strong>zh</strong> (default): Chinese.</li>
         *             <li><strong>en</strong>: English.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AddressBooksProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AddressBooksProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AddressBooksProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AddressBooksProps {
        private final java.lang.Object groupType;
        private final java.lang.Object lang;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupType = builder.groupType;
            this.lang = builder.lang;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getLang() {
            return this.lang;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupType() != null) {
                data.set("groupType", om.valueToTree(this.getGroupType()));
            }
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.datasource.AddressBooksProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AddressBooksProps.Jsii$Proxy that = (AddressBooksProps.Jsii$Proxy) o;

            if (this.groupType != null ? !this.groupType.equals(that.groupType) : that.groupType != null) return false;
            return this.lang != null ? this.lang.equals(that.lang) : that.lang == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupType != null ? this.groupType.hashCode() : 0;
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            return result;
        }
    }
}
