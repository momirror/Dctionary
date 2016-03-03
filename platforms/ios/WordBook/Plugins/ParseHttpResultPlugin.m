//
//  ParseHttpResultPlugin.m
//  HelloCordova
//
//  Created by msp on 16/1/8.
//
//

#import "ParseHttpResultPlugin.h"
#import "Global.h"
#import "DataManagement.h"


@implementation ParseHttpResultPlugin

- (void)parseData:(CDVInvokedUrlCommand*)commard
{
    NSDictionary * dic = commard.arguments[0];
    NSDictionary * basic = dic[@"basic"];
    NSLog(@"%@",[Global convertUnicodeToUTF8:[dic description]]);
    NSArray * translate = basic[@"explains"];
    Word * word = [[Word alloc] init];
    word.translate = [[translate description] dataUsingEncoding:NSUTF8StringEncoding];
    word.usphonetic = basic[@"us-phonetic"];
    word.ukphonetic = basic[@"uk-phonetic"];
    word.word = dic[@"query"];
    
    [[DataManagement instance] addIntoDataSource:word];
    
}

@end
