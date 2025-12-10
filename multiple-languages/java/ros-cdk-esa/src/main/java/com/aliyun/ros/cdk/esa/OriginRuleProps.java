package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>OriginRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.600Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginRuleProps")
@software.amazon.jsii.Jsii.Proxy(OriginRuleProps.Jsii$Proxy.class)
public interface OriginRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property dnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsRecord() {
        return null;
    }

    /**
     * Property follow302Enable: Return Source 302 follow switch.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: ON.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFollow302Enable() {
        return null;
    }

    /**
     * Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFollow302MaxTries() {
        return null;
    }

    /**
     * Property follow302RetainArgs: Retain the original request parameter switch.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: ON.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFollow302RetainArgs() {
        return null;
    }

    /**
     * Property follow302RetainHeader: Retain the original request header switch.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: ON.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFollow302RetainHeader() {
        return null;
    }

    /**
     * Property follow302TargetHost: Modify the source host after 302.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFollow302TargetHost() {
        return null;
    }

    /**
     * Property originHost: The HOST carried in the back-to-origin request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginHost() {
        return null;
    }

    /**
     * Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginHttpPort() {
        return null;
    }

    /**
     * Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginHttpsPort() {
        return null;
    }

    /**
     * Property originMtls: The mtls switch.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: ON.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginMtls() {
        return null;
    }

    /**
     * Property originReadTimeout: Read timeout interval of the source station (s).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginReadTimeout() {
        return null;
    }

    /**
     * Property originScheme: The protocol used by the back-to-origin request.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>http</code>: uses the http protocol to return to the source.</li>
     * <li><code>https</code>: uses the https protocol to return to the source.</li>
     * <li><code>follow</code>: follows the Client Protocol back to the source.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginScheme() {
        return null;
    }

    /**
     * Property originSni: SNI carried in the back-to-origin request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginSni() {
        return null;
    }

    /**
     * Property originVerify: Source station certificate verification switch.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: ON.</li>
     * <li><code>off</code>: closed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginVerify() {
        return null;
    }

    /**
     * Property range: Use the range sharding method to download the file from the source.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: Open.</li>
     * <li><code>off</code>: off.</li>
     * <li><code>force</code>: force.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRange() {
        return null;
    }

    /**
     * Property rangeChunkSize: range shard size.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRangeChunkSize() {
        return null;
    }

    /**
     * Property rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * <p>
     * <ul>
     * <li>Match all incoming requests: value set to true</li>
     * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     * Property ruleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set. Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: open.</li>
     * <li><code>off</code>: close.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     * Property ruleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     * Property siteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OriginRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OriginRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OriginRuleProps> {
        java.lang.Object siteId;
        java.lang.Object dnsRecord;
        java.lang.Object follow302Enable;
        java.lang.Object follow302MaxTries;
        java.lang.Object follow302RetainArgs;
        java.lang.Object follow302RetainHeader;
        java.lang.Object follow302TargetHost;
        java.lang.Object originHost;
        java.lang.Object originHttpPort;
        java.lang.Object originHttpsPort;
        java.lang.Object originMtls;
        java.lang.Object originReadTimeout;
        java.lang.Object originScheme;
        java.lang.Object originSni;
        java.lang.Object originVerify;
        java.lang.Object range;
        java.lang.Object rangeChunkSize;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object siteVersion;

        /**
         * Sets the value of {@link OriginRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getDnsRecord}
         * @param dnsRecord Property dnsRecord: Overwrite the DNS resolution record of the origin request.
         * @return {@code this}
         */
        public Builder dnsRecord(java.lang.String dnsRecord) {
            this.dnsRecord = dnsRecord;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getDnsRecord}
         * @param dnsRecord Property dnsRecord: Overwrite the DNS resolution record of the origin request.
         * @return {@code this}
         */
        public Builder dnsRecord(com.aliyun.ros.cdk.core.IResolvable dnsRecord) {
            this.dnsRecord = dnsRecord;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302Enable}
         * @param follow302Enable Property follow302Enable: Return Source 302 follow switch.
         *                        Value range:
         *                        <p>
         *                        <ul>
         *                        <li><code>on</code>: ON.</li>
         *                        <li><code>off</code>: closed.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder follow302Enable(java.lang.String follow302Enable) {
            this.follow302Enable = follow302Enable;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302Enable}
         * @param follow302Enable Property follow302Enable: Return Source 302 follow switch.
         *                        Value range:
         *                        <p>
         *                        <ul>
         *                        <li><code>on</code>: ON.</li>
         *                        <li><code>off</code>: closed.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder follow302Enable(com.aliyun.ros.cdk.core.IResolvable follow302Enable) {
            this.follow302Enable = follow302Enable;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302MaxTries}
         * @param follow302MaxTries Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
         * @return {@code this}
         */
        public Builder follow302MaxTries(java.lang.Number follow302MaxTries) {
            this.follow302MaxTries = follow302MaxTries;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302MaxTries}
         * @param follow302MaxTries Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
         * @return {@code this}
         */
        public Builder follow302MaxTries(com.aliyun.ros.cdk.core.IResolvable follow302MaxTries) {
            this.follow302MaxTries = follow302MaxTries;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302RetainArgs}
         * @param follow302RetainArgs Property follow302RetainArgs: Retain the original request parameter switch.
         *                            Value range:
         *                            <p>
         *                            <ul>
         *                            <li><code>on</code>: ON.</li>
         *                            <li><code>off</code>: closed.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder follow302RetainArgs(java.lang.String follow302RetainArgs) {
            this.follow302RetainArgs = follow302RetainArgs;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302RetainArgs}
         * @param follow302RetainArgs Property follow302RetainArgs: Retain the original request parameter switch.
         *                            Value range:
         *                            <p>
         *                            <ul>
         *                            <li><code>on</code>: ON.</li>
         *                            <li><code>off</code>: closed.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder follow302RetainArgs(com.aliyun.ros.cdk.core.IResolvable follow302RetainArgs) {
            this.follow302RetainArgs = follow302RetainArgs;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302RetainHeader}
         * @param follow302RetainHeader Property follow302RetainHeader: Retain the original request header switch.
         *                              Value range:
         *                              <p>
         *                              <ul>
         *                              <li><code>on</code>: ON.</li>
         *                              <li><code>off</code>: closed.</li>
         *                              </ul>
         * @return {@code this}
         */
        public Builder follow302RetainHeader(java.lang.String follow302RetainHeader) {
            this.follow302RetainHeader = follow302RetainHeader;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302RetainHeader}
         * @param follow302RetainHeader Property follow302RetainHeader: Retain the original request header switch.
         *                              Value range:
         *                              <p>
         *                              <ul>
         *                              <li><code>on</code>: ON.</li>
         *                              <li><code>off</code>: closed.</li>
         *                              </ul>
         * @return {@code this}
         */
        public Builder follow302RetainHeader(com.aliyun.ros.cdk.core.IResolvable follow302RetainHeader) {
            this.follow302RetainHeader = follow302RetainHeader;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302TargetHost}
         * @param follow302TargetHost Property follow302TargetHost: Modify the source host after 302.
         * @return {@code this}
         */
        public Builder follow302TargetHost(java.lang.String follow302TargetHost) {
            this.follow302TargetHost = follow302TargetHost;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getFollow302TargetHost}
         * @param follow302TargetHost Property follow302TargetHost: Modify the source host after 302.
         * @return {@code this}
         */
        public Builder follow302TargetHost(com.aliyun.ros.cdk.core.IResolvable follow302TargetHost) {
            this.follow302TargetHost = follow302TargetHost;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginHost}
         * @param originHost Property originHost: The HOST carried in the back-to-origin request.
         * @return {@code this}
         */
        public Builder originHost(java.lang.String originHost) {
            this.originHost = originHost;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginHost}
         * @param originHost Property originHost: The HOST carried in the back-to-origin request.
         * @return {@code this}
         */
        public Builder originHost(com.aliyun.ros.cdk.core.IResolvable originHost) {
            this.originHost = originHost;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginHttpPort}
         * @param originHttpPort Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
         * @return {@code this}
         */
        public Builder originHttpPort(java.lang.Number originHttpPort) {
            this.originHttpPort = originHttpPort;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginHttpPort}
         * @param originHttpPort Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
         * @return {@code this}
         */
        public Builder originHttpPort(com.aliyun.ros.cdk.core.IResolvable originHttpPort) {
            this.originHttpPort = originHttpPort;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginHttpsPort}
         * @param originHttpsPort Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
         * @return {@code this}
         */
        public Builder originHttpsPort(java.lang.Number originHttpsPort) {
            this.originHttpsPort = originHttpsPort;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginHttpsPort}
         * @param originHttpsPort Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
         * @return {@code this}
         */
        public Builder originHttpsPort(com.aliyun.ros.cdk.core.IResolvable originHttpsPort) {
            this.originHttpsPort = originHttpsPort;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginMtls}
         * @param originMtls Property originMtls: The mtls switch.
         *                   Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: ON.</li>
         *                   <li><code>off</code>: closed.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder originMtls(java.lang.String originMtls) {
            this.originMtls = originMtls;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginMtls}
         * @param originMtls Property originMtls: The mtls switch.
         *                   Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: ON.</li>
         *                   <li><code>off</code>: closed.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder originMtls(com.aliyun.ros.cdk.core.IResolvable originMtls) {
            this.originMtls = originMtls;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginReadTimeout}
         * @param originReadTimeout Property originReadTimeout: Read timeout interval of the source station (s).
         * @return {@code this}
         */
        public Builder originReadTimeout(java.lang.Number originReadTimeout) {
            this.originReadTimeout = originReadTimeout;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginReadTimeout}
         * @param originReadTimeout Property originReadTimeout: Read timeout interval of the source station (s).
         * @return {@code this}
         */
        public Builder originReadTimeout(com.aliyun.ros.cdk.core.IResolvable originReadTimeout) {
            this.originReadTimeout = originReadTimeout;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginScheme}
         * @param originScheme Property originScheme: The protocol used by the back-to-origin request.
         *                     Value range:
         *                     <p>
         *                     <ul>
         *                     <li><code>http</code>: uses the http protocol to return to the source.</li>
         *                     <li><code>https</code>: uses the https protocol to return to the source.</li>
         *                     <li><code>follow</code>: follows the Client Protocol back to the source.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder originScheme(java.lang.String originScheme) {
            this.originScheme = originScheme;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginScheme}
         * @param originScheme Property originScheme: The protocol used by the back-to-origin request.
         *                     Value range:
         *                     <p>
         *                     <ul>
         *                     <li><code>http</code>: uses the http protocol to return to the source.</li>
         *                     <li><code>https</code>: uses the https protocol to return to the source.</li>
         *                     <li><code>follow</code>: follows the Client Protocol back to the source.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder originScheme(com.aliyun.ros.cdk.core.IResolvable originScheme) {
            this.originScheme = originScheme;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginSni}
         * @param originSni Property originSni: SNI carried in the back-to-origin request.
         * @return {@code this}
         */
        public Builder originSni(java.lang.String originSni) {
            this.originSni = originSni;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginSni}
         * @param originSni Property originSni: SNI carried in the back-to-origin request.
         * @return {@code this}
         */
        public Builder originSni(com.aliyun.ros.cdk.core.IResolvable originSni) {
            this.originSni = originSni;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginVerify}
         * @param originVerify Property originVerify: Source station certificate verification switch.
         *                     Value range:
         *                     <p>
         *                     <ul>
         *                     <li><code>on</code>: ON.</li>
         *                     <li><code>off</code>: closed.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder originVerify(java.lang.String originVerify) {
            this.originVerify = originVerify;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getOriginVerify}
         * @param originVerify Property originVerify: Source station certificate verification switch.
         *                     Value range:
         *                     <p>
         *                     <ul>
         *                     <li><code>on</code>: ON.</li>
         *                     <li><code>off</code>: closed.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder originVerify(com.aliyun.ros.cdk.core.IResolvable originVerify) {
            this.originVerify = originVerify;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRange}
         * @param range Property range: Use the range sharding method to download the file from the source.
         *              Value range:
         *              <p>
         *              <ul>
         *              <li><code>on</code>: Open.</li>
         *              <li><code>off</code>: off.</li>
         *              <li><code>force</code>: force.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder range(java.lang.String range) {
            this.range = range;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRange}
         * @param range Property range: Use the range sharding method to download the file from the source.
         *              Value range:
         *              <p>
         *              <ul>
         *              <li><code>on</code>: Open.</li>
         *              <li><code>off</code>: off.</li>
         *              <li><code>force</code>: force.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder range(com.aliyun.ros.cdk.core.IResolvable range) {
            this.range = range;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRangeChunkSize}
         * @param rangeChunkSize Property rangeChunkSize: range shard size.
         * @return {@code this}
         */
        public Builder rangeChunkSize(java.lang.String rangeChunkSize) {
            this.rangeChunkSize = rangeChunkSize;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRangeChunkSize}
         * @param rangeChunkSize Property rangeChunkSize: range shard size.
         * @return {@code this}
         */
        public Builder rangeChunkSize(com.aliyun.ros.cdk.core.IResolvable rangeChunkSize) {
            this.rangeChunkSize = rangeChunkSize;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link OriginRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OriginRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OriginRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OriginRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OriginRuleProps {
        private final java.lang.Object siteId;
        private final java.lang.Object dnsRecord;
        private final java.lang.Object follow302Enable;
        private final java.lang.Object follow302MaxTries;
        private final java.lang.Object follow302RetainArgs;
        private final java.lang.Object follow302RetainHeader;
        private final java.lang.Object follow302TargetHost;
        private final java.lang.Object originHost;
        private final java.lang.Object originHttpPort;
        private final java.lang.Object originHttpsPort;
        private final java.lang.Object originMtls;
        private final java.lang.Object originReadTimeout;
        private final java.lang.Object originScheme;
        private final java.lang.Object originSni;
        private final java.lang.Object originVerify;
        private final java.lang.Object range;
        private final java.lang.Object rangeChunkSize;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object siteVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsRecord = software.amazon.jsii.Kernel.get(this, "dnsRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.follow302Enable = software.amazon.jsii.Kernel.get(this, "follow302Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.follow302MaxTries = software.amazon.jsii.Kernel.get(this, "follow302MaxTries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.follow302RetainArgs = software.amazon.jsii.Kernel.get(this, "follow302RetainArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.follow302RetainHeader = software.amazon.jsii.Kernel.get(this, "follow302RetainHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.follow302TargetHost = software.amazon.jsii.Kernel.get(this, "follow302TargetHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originHost = software.amazon.jsii.Kernel.get(this, "originHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originHttpPort = software.amazon.jsii.Kernel.get(this, "originHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originHttpsPort = software.amazon.jsii.Kernel.get(this, "originHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originMtls = software.amazon.jsii.Kernel.get(this, "originMtls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originReadTimeout = software.amazon.jsii.Kernel.get(this, "originReadTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originScheme = software.amazon.jsii.Kernel.get(this, "originScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originSni = software.amazon.jsii.Kernel.get(this, "originSni", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originVerify = software.amazon.jsii.Kernel.get(this, "originVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.range = software.amazon.jsii.Kernel.get(this, "range", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rangeChunkSize = software.amazon.jsii.Kernel.get(this, "rangeChunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.dnsRecord = builder.dnsRecord;
            this.follow302Enable = builder.follow302Enable;
            this.follow302MaxTries = builder.follow302MaxTries;
            this.follow302RetainArgs = builder.follow302RetainArgs;
            this.follow302RetainHeader = builder.follow302RetainHeader;
            this.follow302TargetHost = builder.follow302TargetHost;
            this.originHost = builder.originHost;
            this.originHttpPort = builder.originHttpPort;
            this.originHttpsPort = builder.originHttpsPort;
            this.originMtls = builder.originMtls;
            this.originReadTimeout = builder.originReadTimeout;
            this.originScheme = builder.originScheme;
            this.originSni = builder.originSni;
            this.originVerify = builder.originVerify;
            this.range = builder.range;
            this.rangeChunkSize = builder.rangeChunkSize;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.siteVersion = builder.siteVersion;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getDnsRecord() {
            return this.dnsRecord;
        }

        @Override
        public final java.lang.Object getFollow302Enable() {
            return this.follow302Enable;
        }

        @Override
        public final java.lang.Object getFollow302MaxTries() {
            return this.follow302MaxTries;
        }

        @Override
        public final java.lang.Object getFollow302RetainArgs() {
            return this.follow302RetainArgs;
        }

        @Override
        public final java.lang.Object getFollow302RetainHeader() {
            return this.follow302RetainHeader;
        }

        @Override
        public final java.lang.Object getFollow302TargetHost() {
            return this.follow302TargetHost;
        }

        @Override
        public final java.lang.Object getOriginHost() {
            return this.originHost;
        }

        @Override
        public final java.lang.Object getOriginHttpPort() {
            return this.originHttpPort;
        }

        @Override
        public final java.lang.Object getOriginHttpsPort() {
            return this.originHttpsPort;
        }

        @Override
        public final java.lang.Object getOriginMtls() {
            return this.originMtls;
        }

        @Override
        public final java.lang.Object getOriginReadTimeout() {
            return this.originReadTimeout;
        }

        @Override
        public final java.lang.Object getOriginScheme() {
            return this.originScheme;
        }

        @Override
        public final java.lang.Object getOriginSni() {
            return this.originSni;
        }

        @Override
        public final java.lang.Object getOriginVerify() {
            return this.originVerify;
        }

        @Override
        public final java.lang.Object getRange() {
            return this.range;
        }

        @Override
        public final java.lang.Object getRangeChunkSize() {
            return this.rangeChunkSize;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getRuleEnable() {
            return this.ruleEnable;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSequence() {
            return this.sequence;
        }

        @Override
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getDnsRecord() != null) {
                data.set("dnsRecord", om.valueToTree(this.getDnsRecord()));
            }
            if (this.getFollow302Enable() != null) {
                data.set("follow302Enable", om.valueToTree(this.getFollow302Enable()));
            }
            if (this.getFollow302MaxTries() != null) {
                data.set("follow302MaxTries", om.valueToTree(this.getFollow302MaxTries()));
            }
            if (this.getFollow302RetainArgs() != null) {
                data.set("follow302RetainArgs", om.valueToTree(this.getFollow302RetainArgs()));
            }
            if (this.getFollow302RetainHeader() != null) {
                data.set("follow302RetainHeader", om.valueToTree(this.getFollow302RetainHeader()));
            }
            if (this.getFollow302TargetHost() != null) {
                data.set("follow302TargetHost", om.valueToTree(this.getFollow302TargetHost()));
            }
            if (this.getOriginHost() != null) {
                data.set("originHost", om.valueToTree(this.getOriginHost()));
            }
            if (this.getOriginHttpPort() != null) {
                data.set("originHttpPort", om.valueToTree(this.getOriginHttpPort()));
            }
            if (this.getOriginHttpsPort() != null) {
                data.set("originHttpsPort", om.valueToTree(this.getOriginHttpsPort()));
            }
            if (this.getOriginMtls() != null) {
                data.set("originMtls", om.valueToTree(this.getOriginMtls()));
            }
            if (this.getOriginReadTimeout() != null) {
                data.set("originReadTimeout", om.valueToTree(this.getOriginReadTimeout()));
            }
            if (this.getOriginScheme() != null) {
                data.set("originScheme", om.valueToTree(this.getOriginScheme()));
            }
            if (this.getOriginSni() != null) {
                data.set("originSni", om.valueToTree(this.getOriginSni()));
            }
            if (this.getOriginVerify() != null) {
                data.set("originVerify", om.valueToTree(this.getOriginVerify()));
            }
            if (this.getRange() != null) {
                data.set("range", om.valueToTree(this.getRange()));
            }
            if (this.getRangeChunkSize() != null) {
                data.set("rangeChunkSize", om.valueToTree(this.getRangeChunkSize()));
            }
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getRuleEnable() != null) {
                data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSequence() != null) {
                data.set("sequence", om.valueToTree(this.getSequence()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.OriginRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OriginRuleProps.Jsii$Proxy that = (OriginRuleProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.dnsRecord != null ? !this.dnsRecord.equals(that.dnsRecord) : that.dnsRecord != null) return false;
            if (this.follow302Enable != null ? !this.follow302Enable.equals(that.follow302Enable) : that.follow302Enable != null) return false;
            if (this.follow302MaxTries != null ? !this.follow302MaxTries.equals(that.follow302MaxTries) : that.follow302MaxTries != null) return false;
            if (this.follow302RetainArgs != null ? !this.follow302RetainArgs.equals(that.follow302RetainArgs) : that.follow302RetainArgs != null) return false;
            if (this.follow302RetainHeader != null ? !this.follow302RetainHeader.equals(that.follow302RetainHeader) : that.follow302RetainHeader != null) return false;
            if (this.follow302TargetHost != null ? !this.follow302TargetHost.equals(that.follow302TargetHost) : that.follow302TargetHost != null) return false;
            if (this.originHost != null ? !this.originHost.equals(that.originHost) : that.originHost != null) return false;
            if (this.originHttpPort != null ? !this.originHttpPort.equals(that.originHttpPort) : that.originHttpPort != null) return false;
            if (this.originHttpsPort != null ? !this.originHttpsPort.equals(that.originHttpsPort) : that.originHttpsPort != null) return false;
            if (this.originMtls != null ? !this.originMtls.equals(that.originMtls) : that.originMtls != null) return false;
            if (this.originReadTimeout != null ? !this.originReadTimeout.equals(that.originReadTimeout) : that.originReadTimeout != null) return false;
            if (this.originScheme != null ? !this.originScheme.equals(that.originScheme) : that.originScheme != null) return false;
            if (this.originSni != null ? !this.originSni.equals(that.originSni) : that.originSni != null) return false;
            if (this.originVerify != null ? !this.originVerify.equals(that.originVerify) : that.originVerify != null) return false;
            if (this.range != null ? !this.range.equals(that.range) : that.range != null) return false;
            if (this.rangeChunkSize != null ? !this.rangeChunkSize.equals(that.rangeChunkSize) : that.rangeChunkSize != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            return this.siteVersion != null ? this.siteVersion.equals(that.siteVersion) : that.siteVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.dnsRecord != null ? this.dnsRecord.hashCode() : 0);
            result = 31 * result + (this.follow302Enable != null ? this.follow302Enable.hashCode() : 0);
            result = 31 * result + (this.follow302MaxTries != null ? this.follow302MaxTries.hashCode() : 0);
            result = 31 * result + (this.follow302RetainArgs != null ? this.follow302RetainArgs.hashCode() : 0);
            result = 31 * result + (this.follow302RetainHeader != null ? this.follow302RetainHeader.hashCode() : 0);
            result = 31 * result + (this.follow302TargetHost != null ? this.follow302TargetHost.hashCode() : 0);
            result = 31 * result + (this.originHost != null ? this.originHost.hashCode() : 0);
            result = 31 * result + (this.originHttpPort != null ? this.originHttpPort.hashCode() : 0);
            result = 31 * result + (this.originHttpsPort != null ? this.originHttpsPort.hashCode() : 0);
            result = 31 * result + (this.originMtls != null ? this.originMtls.hashCode() : 0);
            result = 31 * result + (this.originReadTimeout != null ? this.originReadTimeout.hashCode() : 0);
            result = 31 * result + (this.originScheme != null ? this.originScheme.hashCode() : 0);
            result = 31 * result + (this.originSni != null ? this.originSni.hashCode() : 0);
            result = 31 * result + (this.originVerify != null ? this.originVerify.hashCode() : 0);
            result = 31 * result + (this.range != null ? this.range.hashCode() : 0);
            result = 31 * result + (this.rangeChunkSize != null ? this.rangeChunkSize.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            return result;
        }
    }
}
