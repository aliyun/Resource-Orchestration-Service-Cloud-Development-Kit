package com.aliyun.ros.cdk.dns.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DNS::DomainRecords</code>, which is used to query domain name system (DNS) records.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:27.889Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.DomainRecords")
public class DomainRecords extends com.aliyun.ros.cdk.core.Resource {

    protected DomainRecords(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DomainRecords(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DomainRecords(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.datasource.DomainRecordsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DomainRecords(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.datasource.DomainRecordsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DomainRecordIds: The list of The DNS domain record ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainRecordIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainRecordIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DomainRecords: The information about DNS records.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainRecords() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainRecords", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.datasource.DomainRecords}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.datasource.DomainRecords> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dns.datasource.DomainRecordsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.datasource.DomainRecordsProps.Builder();
        }

        /**
         * Property domainName: The domain name for which you want to query DNS records.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The domain name for which you want to query DNS records. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: The domain name for which you want to query DNS records.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The domain name for which you want to query DNS records. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property direction: The order in which the returned DNS records are sorted.
         * <p>
         * @return {@code this}
         * @param direction Property direction: The order in which the returned DNS records are sorted. This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * Property direction: The order in which the returned DNS records are sorted.
         * <p>
         * @return {@code this}
         * @param direction Property direction: The order in which the returned DNS records are sorted. This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * Property groupId: The ID of the domain name group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the domain name group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The ID of the domain name group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the domain name group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property keyWord: The keyword for searches in "%KeyWord%" mode.
         * <p>
         * The value is not case-sensitive.
         * <p>
         * @return {@code this}
         * @param keyWord Property keyWord: The keyword for searches in "%KeyWord%" mode. This parameter is required.
         */
        public Builder keyWord(final java.lang.String keyWord) {
            this.props.keyWord(keyWord);
            return this;
        }
        /**
         * Property keyWord: The keyword for searches in "%KeyWord%" mode.
         * <p>
         * The value is not case-sensitive.
         * <p>
         * @return {@code this}
         * @param keyWord Property keyWord: The keyword for searches in "%KeyWord%" mode. This parameter is required.
         */
        public Builder keyWord(final com.aliyun.ros.cdk.core.IResolvable keyWord) {
            this.props.keyWord(keyWord);
            return this;
        }

        /**
         * Property lang: The language type.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language type. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * Property lang: The language type.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language type. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * Property line: The line based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param line Property line: The line based on which the system queries DNS records. This parameter is required.
         */
        public Builder line(final java.lang.String line) {
            this.props.line(line);
            return this;
        }
        /**
         * Property line: The line based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param line Property line: The line based on which the system queries DNS records. This parameter is required.
         */
        public Builder line(final com.aliyun.ros.cdk.core.IResolvable line) {
            this.props.line(line);
            return this;
        }

        /**
         * Property orderBy: The method that is used to sort the returned DNS records.
         * <p>
         * @return {@code this}
         * @param orderBy Property orderBy: The method that is used to sort the returned DNS records. This parameter is required.
         */
        public Builder orderBy(final java.lang.String orderBy) {
            this.props.orderBy(orderBy);
            return this;
        }
        /**
         * Property orderBy: The method that is used to sort the returned DNS records.
         * <p>
         * @return {@code this}
         * @param orderBy Property orderBy: The method that is used to sort the returned DNS records. This parameter is required.
         */
        public Builder orderBy(final com.aliyun.ros.cdk.core.IResolvable orderBy) {
            this.props.orderBy(orderBy);
            return this;
        }

        /**
         * Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param rrKeyWord Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records. This parameter is required.
         */
        public Builder rrKeyWord(final java.lang.String rrKeyWord) {
            this.props.rrKeyWord(rrKeyWord);
            return this;
        }
        /**
         * Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param rrKeyWord Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records. This parameter is required.
         */
        public Builder rrKeyWord(final com.aliyun.ros.cdk.core.IResolvable rrKeyWord) {
            this.props.rrKeyWord(rrKeyWord);
            return this;
        }

        /**
         * Property searchMode: The search mode.
         * <p>
         * @return {@code this}
         * @param searchMode Property searchMode: The search mode. This parameter is required.
         */
        public Builder searchMode(final java.lang.String searchMode) {
            this.props.searchMode(searchMode);
            return this;
        }
        /**
         * Property searchMode: The search mode.
         * <p>
         * @return {@code this}
         * @param searchMode Property searchMode: The search mode. This parameter is required.
         */
        public Builder searchMode(final com.aliyun.ros.cdk.core.IResolvable searchMode) {
            this.props.searchMode(searchMode);
            return this;
        }

        /**
         * Property status: The status of the DNS records to query.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the DNS records to query. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the DNS records to query.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the DNS records to query. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property type: The type of the DNS records to query.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the DNS records to query. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the DNS records to query.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the DNS records to query. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property typeKeyWord: The type keyword based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param typeKeyWord Property typeKeyWord: The type keyword based on which the system queries DNS records. This parameter is required.
         */
        public Builder typeKeyWord(final java.lang.String typeKeyWord) {
            this.props.typeKeyWord(typeKeyWord);
            return this;
        }
        /**
         * Property typeKeyWord: The type keyword based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param typeKeyWord Property typeKeyWord: The type keyword based on which the system queries DNS records. This parameter is required.
         */
        public Builder typeKeyWord(final com.aliyun.ros.cdk.core.IResolvable typeKeyWord) {
            this.props.typeKeyWord(typeKeyWord);
            return this;
        }

        /**
         * Property valueKeyWord: The record value keyword based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param valueKeyWord Property valueKeyWord: The record value keyword based on which the system queries DNS records. This parameter is required.
         */
        public Builder valueKeyWord(final java.lang.String valueKeyWord) {
            this.props.valueKeyWord(valueKeyWord);
            return this;
        }
        /**
         * Property valueKeyWord: The record value keyword based on which the system queries DNS records.
         * <p>
         * @return {@code this}
         * @param valueKeyWord Property valueKeyWord: The record value keyword based on which the system queries DNS records. This parameter is required.
         */
        public Builder valueKeyWord(final com.aliyun.ros.cdk.core.IResolvable valueKeyWord) {
            this.props.valueKeyWord(valueKeyWord);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.datasource.DomainRecords}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.datasource.DomainRecords build() {
            return new com.aliyun.ros.cdk.dns.datasource.DomainRecords(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
