package com.aliyun.ros.cdk.dns.datasource;

/**
 * Properties for defining a <code>DATASOURCE::DNS::DomainRecords</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.519Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.RosDomainRecordsProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainRecordsProps.Jsii$Proxy.class)
public interface RosDomainRecordsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDirection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getLine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderBy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRrKeyWord() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSearchMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTypeKeyWord() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValueKeyWord() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDomainRecordsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDomainRecordsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDomainRecordsProps> {
        java.lang.Object domainName;
        java.lang.Object direction;
        java.lang.Object groupId;
        java.lang.Object keyWord;
        java.lang.Object lang;
        java.lang.Object line;
        java.lang.Object orderBy;
        java.lang.Object rrKeyWord;
        java.lang.Object searchMode;
        java.lang.Object status;
        java.lang.Object type;
        java.lang.Object typeKeyWord;
        java.lang.Object valueKeyWord;

        /**
         * Sets the value of {@link RosDomainRecordsProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getDirection}
         * @param direction the value to be set.
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getDirection}
         * @param direction the value to be set.
         * @return {@code this}
         */
        public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getKeyWord}
         * @param keyWord the value to be set.
         * @return {@code this}
         */
        public Builder keyWord(java.lang.String keyWord) {
            this.keyWord = keyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getKeyWord}
         * @param keyWord the value to be set.
         * @return {@code this}
         */
        public Builder keyWord(com.aliyun.ros.cdk.core.IResolvable keyWord) {
            this.keyWord = keyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getLine}
         * @param line the value to be set.
         * @return {@code this}
         */
        public Builder line(java.lang.String line) {
            this.line = line;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getLine}
         * @param line the value to be set.
         * @return {@code this}
         */
        public Builder line(com.aliyun.ros.cdk.core.IResolvable line) {
            this.line = line;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getOrderBy}
         * @param orderBy the value to be set.
         * @return {@code this}
         */
        public Builder orderBy(java.lang.String orderBy) {
            this.orderBy = orderBy;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getOrderBy}
         * @param orderBy the value to be set.
         * @return {@code this}
         */
        public Builder orderBy(com.aliyun.ros.cdk.core.IResolvable orderBy) {
            this.orderBy = orderBy;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getRrKeyWord}
         * @param rrKeyWord the value to be set.
         * @return {@code this}
         */
        public Builder rrKeyWord(java.lang.String rrKeyWord) {
            this.rrKeyWord = rrKeyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getRrKeyWord}
         * @param rrKeyWord the value to be set.
         * @return {@code this}
         */
        public Builder rrKeyWord(com.aliyun.ros.cdk.core.IResolvable rrKeyWord) {
            this.rrKeyWord = rrKeyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getSearchMode}
         * @param searchMode the value to be set.
         * @return {@code this}
         */
        public Builder searchMode(java.lang.String searchMode) {
            this.searchMode = searchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getSearchMode}
         * @param searchMode the value to be set.
         * @return {@code this}
         */
        public Builder searchMode(com.aliyun.ros.cdk.core.IResolvable searchMode) {
            this.searchMode = searchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getTypeKeyWord}
         * @param typeKeyWord the value to be set.
         * @return {@code this}
         */
        public Builder typeKeyWord(java.lang.String typeKeyWord) {
            this.typeKeyWord = typeKeyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getTypeKeyWord}
         * @param typeKeyWord the value to be set.
         * @return {@code this}
         */
        public Builder typeKeyWord(com.aliyun.ros.cdk.core.IResolvable typeKeyWord) {
            this.typeKeyWord = typeKeyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getValueKeyWord}
         * @param valueKeyWord the value to be set.
         * @return {@code this}
         */
        public Builder valueKeyWord(java.lang.String valueKeyWord) {
            this.valueKeyWord = valueKeyWord;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainRecordsProps#getValueKeyWord}
         * @param valueKeyWord the value to be set.
         * @return {@code this}
         */
        public Builder valueKeyWord(com.aliyun.ros.cdk.core.IResolvable valueKeyWord) {
            this.valueKeyWord = valueKeyWord;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDomainRecordsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDomainRecordsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDomainRecordsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDomainRecordsProps {
        private final java.lang.Object domainName;
        private final java.lang.Object direction;
        private final java.lang.Object groupId;
        private final java.lang.Object keyWord;
        private final java.lang.Object lang;
        private final java.lang.Object line;
        private final java.lang.Object orderBy;
        private final java.lang.Object rrKeyWord;
        private final java.lang.Object searchMode;
        private final java.lang.Object status;
        private final java.lang.Object type;
        private final java.lang.Object typeKeyWord;
        private final java.lang.Object valueKeyWord;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyWord = software.amazon.jsii.Kernel.get(this, "keyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.line = software.amazon.jsii.Kernel.get(this, "line", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderBy = software.amazon.jsii.Kernel.get(this, "orderBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rrKeyWord = software.amazon.jsii.Kernel.get(this, "rrKeyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searchMode = software.amazon.jsii.Kernel.get(this, "searchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.typeKeyWord = software.amazon.jsii.Kernel.get(this, "typeKeyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.valueKeyWord = software.amazon.jsii.Kernel.get(this, "valueKeyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.direction = builder.direction;
            this.groupId = builder.groupId;
            this.keyWord = builder.keyWord;
            this.lang = builder.lang;
            this.line = builder.line;
            this.orderBy = builder.orderBy;
            this.rrKeyWord = builder.rrKeyWord;
            this.searchMode = builder.searchMode;
            this.status = builder.status;
            this.type = builder.type;
            this.typeKeyWord = builder.typeKeyWord;
            this.valueKeyWord = builder.valueKeyWord;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getDirection() {
            return this.direction;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
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
        public final java.lang.Object getLine() {
            return this.line;
        }

        @Override
        public final java.lang.Object getOrderBy() {
            return this.orderBy;
        }

        @Override
        public final java.lang.Object getRrKeyWord() {
            return this.rrKeyWord;
        }

        @Override
        public final java.lang.Object getSearchMode() {
            return this.searchMode;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getTypeKeyWord() {
            return this.typeKeyWord;
        }

        @Override
        public final java.lang.Object getValueKeyWord() {
            return this.valueKeyWord;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            if (this.getDirection() != null) {
                data.set("direction", om.valueToTree(this.getDirection()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getKeyWord() != null) {
                data.set("keyWord", om.valueToTree(this.getKeyWord()));
            }
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getLine() != null) {
                data.set("line", om.valueToTree(this.getLine()));
            }
            if (this.getOrderBy() != null) {
                data.set("orderBy", om.valueToTree(this.getOrderBy()));
            }
            if (this.getRrKeyWord() != null) {
                data.set("rrKeyWord", om.valueToTree(this.getRrKeyWord()));
            }
            if (this.getSearchMode() != null) {
                data.set("searchMode", om.valueToTree(this.getSearchMode()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }
            if (this.getTypeKeyWord() != null) {
                data.set("typeKeyWord", om.valueToTree(this.getTypeKeyWord()));
            }
            if (this.getValueKeyWord() != null) {
                data.set("valueKeyWord", om.valueToTree(this.getValueKeyWord()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.datasource.RosDomainRecordsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDomainRecordsProps.Jsii$Proxy that = (RosDomainRecordsProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (this.direction != null ? !this.direction.equals(that.direction) : that.direction != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.keyWord != null ? !this.keyWord.equals(that.keyWord) : that.keyWord != null) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            if (this.line != null ? !this.line.equals(that.line) : that.line != null) return false;
            if (this.orderBy != null ? !this.orderBy.equals(that.orderBy) : that.orderBy != null) return false;
            if (this.rrKeyWord != null ? !this.rrKeyWord.equals(that.rrKeyWord) : that.rrKeyWord != null) return false;
            if (this.searchMode != null ? !this.searchMode.equals(that.searchMode) : that.searchMode != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
            if (this.typeKeyWord != null ? !this.typeKeyWord.equals(that.typeKeyWord) : that.typeKeyWord != null) return false;
            return this.valueKeyWord != null ? this.valueKeyWord.equals(that.valueKeyWord) : that.valueKeyWord == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.direction != null ? this.direction.hashCode() : 0);
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.keyWord != null ? this.keyWord.hashCode() : 0);
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.line != null ? this.line.hashCode() : 0);
            result = 31 * result + (this.orderBy != null ? this.orderBy.hashCode() : 0);
            result = 31 * result + (this.rrKeyWord != null ? this.rrKeyWord.hashCode() : 0);
            result = 31 * result + (this.searchMode != null ? this.searchMode.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            result = 31 * result + (this.typeKeyWord != null ? this.typeKeyWord.hashCode() : 0);
            result = 31 * result + (this.valueKeyWord != null ? this.valueKeyWord.hashCode() : 0);
            return result;
        }
    }
}
