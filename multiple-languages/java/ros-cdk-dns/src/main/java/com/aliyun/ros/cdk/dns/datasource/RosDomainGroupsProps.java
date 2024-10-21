package com.aliyun.ros.cdk.dns.datasource;

/**
 * Properties for defining a <code>RosDomainGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.495Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.RosDomainGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainGroupsProps.Jsii$Proxy.class)
public interface RosDomainGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyWord() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDomainGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDomainGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDomainGroupsProps> {
        java.lang.Object keyWord;
        java.lang.Object lang;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDomainGroupsProps#getKeyWord}
         * @param keyWord the value to be set.
         * @return {@code this}
         */
        public Builder keyWord(java.lang.String keyWord) {
            this.keyWord = keyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainGroupsProps#getKeyWord}
         * @param keyWord the value to be set.
         * @return {@code this}
         */
        public Builder keyWord(com.aliyun.ros.cdk.core.IResolvable keyWord) {
            this.keyWord = keyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainGroupsProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainGroupsProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDomainGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDomainGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDomainGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDomainGroupsProps {
        private final java.lang.Object keyWord;
        private final java.lang.Object lang;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keyWord = software.amazon.jsii.Kernel.get(this, "keyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keyWord = builder.keyWord;
            this.lang = builder.lang;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getKeyWord() {
            return this.keyWord;
        }

        @Override
        public final java.lang.Object getLang() {
            return this.lang;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getKeyWord() != null) {
                data.set("keyWord", om.valueToTree(this.getKeyWord()));
            }
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.datasource.RosDomainGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDomainGroupsProps.Jsii$Proxy that = (RosDomainGroupsProps.Jsii$Proxy) o;

            if (this.keyWord != null ? !this.keyWord.equals(that.keyWord) : that.keyWord != null) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.keyWord != null ? this.keyWord.hashCode() : 0;
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
